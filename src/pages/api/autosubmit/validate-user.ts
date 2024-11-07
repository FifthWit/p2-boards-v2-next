import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const form = formidable({
            maxFileSize: 0,
            keepExtensions: false,
            multiples: false,
            hashAlgorithm: false,
            uploadDir: '',
        });

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Request timeout')), 5000);
        });

        const parsePromise = new Promise((resolve, reject) => {
            form.parse(req, (err, fields) => {
                if (err) reject(err);
                resolve(fields);
            });
        });

        const fields = (await Promise.race([
            parsePromise,
            timeoutPromise,
        ])) as formidable.Fields;
        // total bs, thanks a lot ts for making this unreadable
        const auth_hash = Array.isArray(fields['auth_hash'])
            ? fields['auth_hash'][0]
            : fields['auth_hash'];

        if (!auth_hash) {
            return res.status(400).json({ error: 'Missing auth_hash' });
        }

        const isValid = await prisma.usersNew.findFirst({
            where: {
                auth_hash: auth_hash,
            },
        });

        if (isValid) {
            return res.status(200).json({
                success: true,
                auth_hash,
            });
        }

        return res.status(400).json({
            success: false,
            auth_hash,
        });
    } catch (error) {
        console.error('Error processing request:', error);
        if (error instanceof Error && error.message === 'Request timeout') {
            return res.status(408).json({ error: 'Request timeout' });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
}
