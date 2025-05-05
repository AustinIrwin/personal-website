import CoursesList from "@/components/courselist";
import Bio from "@/components/mybio";
import Header from "@/components/myheader";
import { Separator } from "@/components/ui/separator";



export default function Home() {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-40 lg: w-196 ">
        <Header />
        <Separator className="my-4"/>
        <Bio />
        <CoursesList />
      </div>
    </div>
  );
}
