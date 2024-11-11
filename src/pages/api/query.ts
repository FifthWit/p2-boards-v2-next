import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { NextApiRequest, NextApiResponse } from 'next';

// random api draft thing

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const profileNumber = Array.isArray(req.query.profileNumber)
        ? req.query.profileNumber[0]
        : req.query.profileNumber;
    const mapId = Array.isArray(req.query.mapId)
        ? req.query.mapId[0]
        : req.query.mapId;

    const errors = [];
    if (!profileNumber) errors.push('profileNumber is required');
    if (!mapId) errors.push('mapId is required');

    if (errors.length > 0) {
        return res.status(400).json({
            error: errors.join(', ') + '. Documentation at /docs/api',
        });
    }

    const basicInfo = await prisma.scores.findUnique({
        where: {
            profile_number_map_id: {
                profile_number: profileNumber as string,
                map_id: mapId as string,
            },
        },
    });

    if (!basicInfo) {
        return res.status(404).json({ error: 'Player rank not found' });
    }

    const user = await prisma.usersNew.findUnique({
        where: {
            profile_number: profileNumber,
        },
        select: {
            profile_number: true,
            boardname: true,
            steamname: true,
            banned: true,
            registered: true,
            avatar: true,
            twitch: true,
            youtube: true,
            title: true,
            admin: true,
        },
    });

    if (user?.boardname == null && user?.steamname != null) {
        user.boardname = user.steamname;
    }

    const changelogData = await prisma.changelog.findUnique({
        where: { id: basicInfo.changelog_id },
    });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
        basicInfo,
        user,
        changelog_id: basicInfo.changelog_id,
        scoreData: changelogData,
    });
}
