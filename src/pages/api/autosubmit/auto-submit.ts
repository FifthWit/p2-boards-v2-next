import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields } from 'formidable';
import { verifyAuth } from '@/lib/utils';

interface uploadedFiles {
    demoFile: File[];
}
interface reqData {
    fields: {
        auth_hash: string[];
        mapId: string[];
        score: string[];
    };
    files: {
        demoFile: File[];
    };
}

export const config = {
    api: {
        bodyParser: false,
    },
};

async function saveDemo(demo: File) {
    console.log(demo.type);
    // totally awesome feature to submit to db, atm I havent worked on how to store it so Ima work on this later <3
    return;
}

async function submitRun(
    data: { fields: Fields; files: uploadedFiles },
    auth_hash: string
) {
    const { files } = data;
    console.log(
        'It did submit but there is no db logic to submit it',
        auth_hash.at(1)
    );
    saveDemo(files.demoFile[0]);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const form = formidable();
        const { fields, files }: reqData = await new Promise(
            (resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    else
                        resolve({
                            fields: fields as reqData['fields'],
                            files: {
                                demoFile: files.demoFile as unknown as File[],
                            },
                        });
                });
            }
        );

        if (
            fields.auth_hash &&
            fields.auth_hash[0] &&
            (await verifyAuth(fields.auth_hash[0]))
        ) {
            // Mock submit to db
            submitRun({ fields, files }, fields.auth_hash[0]);
        }

        res.status(200).json({ message: 'Request received' });
    } catch (err) {
        res.status(500).json({ error: 'Error parsing the form data', err });
    }
}
