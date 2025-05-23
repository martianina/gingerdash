'use client';
import Completed from 'components/course-page/Completion';
import CourseInfo from 'components/course-page/CourseInfo';
import InstructorCard from 'components/course-page/InstructorCard';
import Certificate from 'components/course-page/Certificate';
import Card from 'components/card';

function CoursePage() {
  return (
    <div className="mt-3 grid w-full grid-cols-1 gap-5 font-dm lg:grid-cols-11">
      <div className="h-full w-full rounded-[20px] lg:col-span-7 4xl:col-span-8">
        {/* iframe */}
        <Card extra={'w-full mb-5'}>
          <iframe
            className="aspect-video w-full rounded-[20px]"
            src="https://www.youtube.com/embed/geyVktOxBJk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Card>
        {/* Course info */}
        <CourseInfo />
      </div>

      {/* right section */}
      <div className="lg:col-span-4 4xl:col-span-3">
        <Completed />
      </div>
    </div>
  );
}

export default CoursePage;
