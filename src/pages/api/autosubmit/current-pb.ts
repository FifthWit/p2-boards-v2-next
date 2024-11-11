import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import { verifyAuth } from '@/lib/utils';

const prisma = new PrismaClient();

async function getLatestPb(profileNumber: number): Promise<number> {
    const score = await prisma.changelog.findFirst({
        where: {
            profile_number: JSON.stringify(profileNumber),
        },
    });

    return score?.score ?? 0;
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({ message: 'Form parsing error' });
        }

        const autosubmitKey = Array.isArray(fields.autosubmit_key)
            ? fields.autosubmit_key[0]
            : fields.autosubmit_key;

        if (!(autosubmitKey && (await verifyAuth(autosubmitKey)))) {
            return res.status(403).json({
                message: 'ERROR: invalid or empty autosubmit_key sent',
            });
        } else {
            const latestPb = await getLatestPb(Number(autosubmitKey));
            return res.status(200).json({ latestPb });
        }
    });
}
