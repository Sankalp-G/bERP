'use client'

import { StudentProfile, TeacherCourse } from "@/lib/db/actions";
import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import { useState, useEffect } from "react";

interface Props {
  courses: TeacherCourse[] | undefined;
  onSelectionChange?: SelectProps["onSelectionChange"];
}

export default function AttendanceSelect({ courses }: Props) {
  const [selectedCourseId, setSelectedCourseId] = useState<
    Set<number> | undefined
  >(undefined);

  const [students, setStudents] = useState<StudentProfile[]>([]);

  useEffect(() => {
    async function setStudentsFromCourseId(courseId: number) {
      const students = await (
        await fetch(`/api/courseStudents/${courseId}`)
      ).json();
      setStudents(students);
    }

    // @ts-expect-error set doesn't work properly
    const courseId = selectedCourseId?.currentKey;
    if (courseId) {
      setStudentsFromCourseId(courseId);
    }

    console.log(students);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourseId]);

  return (
    <main className="p-8">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl font-semibold pb-2">Set Marks</h1>

        <Select
          items={courses ?? []}
          placeholder="Select a course"
          variant="underlined"
          className="mb-4 max-w-sm"
          size="sm"
          onSelectionChange={(course) =>
            setSelectedCourseId(course as Set<number>)
          }
          aria-label="Select a course"
        >
          {(course) => (
            <SelectItem key={course.id} value={course.courseName}>
              {course.courseName}
            </SelectItem>
          )}
        </Select>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        {marks?.map((item, index) => (
          <MarkCard key={index} name={item.courseName} tag={item.department} labMarks={item.labMarks} testMarks={item.testMarks} projectMarks={item.projectMarks} />
        ))}
      </div> */}
    </main>
  );
}