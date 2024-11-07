// import { PrismaClient } from '@prisma/client';
// import Change from '@/components/custom/ChangelogChart';
// import { Twitch } from 'lucide-react';
// import Image from 'next/image';

// const prisma = new PrismaClient();

interface ProfileParams {
    profileid: string;
}

export default async function Profile({}: { params: Promise<ProfileParams> }) {
    // const profile = await params;
    // const profileId = parseInt(profile.profileid);

    // const profileData = await prisma.usersNew.findUnique({
    //     where: { id: profileId },
    // });

    // const profileRuns = await prisma.run.findFirstOrThrow({
    //     where: { userDataId: profileId },
    //     include: {
    //         scoreData: true,
    //         userData: true,
    //     },
    // });

    // if (!profileRuns) {
    //     return (
    //         <div>
    //             <p>Profile data not found.</p>
    //         </div>
    //     );
    // }

    return (
        <div>
            <div className="flex flex-row w-full *:w-1/3">
                {/* <div className="flex flex-row items-center *:m-2">
                    <Image
                        src={profileData?.avatar ?? ''}
                        alt=""
                        className="rounded-full"
                        width={64}
                        height={64}
                    />
                    <div className="flex flex-col">
                        <h4 className="text-4xl font-semibold">
                            {profileData?.boardname}
                        </h4>
                        <p className="text-muted-foreground">
                            ProfileID: {profileData?.id}
                        </p>
                        <div className="flex flex-row *:m-0.5">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-purple-600 w-8 aspect-square rounded-md p-0.5 flex items-center"
                                >
                                    <Twitch />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <AggregateScores id={profileId} />

                <Change chartData={chartData} className="w-1/3" /> */}
            </div>
            scores would be below
        </div>
    );
}
