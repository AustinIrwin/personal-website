import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type props = {
    name: string,
    description: string,
    semester: string,
    skills: string[] | null,
    project: string | null,
}
export default function Course(Props: props) {

    return(
        <Card className="w-84 m-4">
            <CardHeader>
                <CardTitle>
                    {Props.name}
                </CardTitle>
                <CardDescription>
                    {Props.semester}
                </CardDescription>
            </CardHeader>
            <CardContent>

                {Props.description}
            </CardContent>
        </Card>

    );
}