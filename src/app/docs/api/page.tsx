import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

enum endpointTypes {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
}

interface endpoint {
    url: string;
    types: endpointTypes;
    docs: string | null;
}

const endpoints: endpoint[] = [
    {
        types: endpointTypes.GET,
        url: '/query',
        docs: `Accessible via GET endpoints, currently takes input of profileNumber and mapId to fetch a run's information like the runner, and the rank. Uses parameters for query information`,
    },
];

export default async function Page() {
    return (
        <div className="p-12">
            <Accordion type="single" collapsible className="w-full">
                {endpoints.map((endpoint, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                            <div className="flex flex-row items-center *:m-2">
                                <div className="bg-green-500 rounded-md p-2">
                                    {endpoint.types}
                                </div>
                                {endpoint.url}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>{endpoint.docs}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
