import coursesData from '../data/courses.json';
import Course from './mycourse';


export default function CoursesList() {
  return (
    <div>
      <div className='flex flex-row flex-wrap'>
      {coursesData.courses.map((course, i) => (
        <div key={i}>
          <Course 
                name={course.title} 
                description={course.description}
                semester={course.semester}
                skills={course.skills}
                project={course.projecturl}/>
        </div>
      ))}
      </div>
    </div>
  );
}