'use client'

import { TeacherCourse } from "@/lib/db/actions";
import { Select, SelectItem, SelectProps } from "@nextui-org/react";

interface Props {
  courses: TeacherCourse[] | undefined
  isLoading?: boolean
  onSelectionChange?: SelectProps['onSelectionChange']
}

export default function CourseSelect({ courses, onSelectionChange=()=>{}, isLoading = false }: Props) {
  return (
    <Select
      items={courses ?? []}
      placeholder="Select a course"
      variant="underlined"
      className="mb-4 max-w-sm"
      size="sm"
      isLoading={isLoading}
      onSelectionChange={console.log}
      aria-label="Select a course"
    >
      {(course) => (
        <SelectItem key={course.id} value={course.courseName}>
          {course.courseName}
        </SelectItem>
      )}
    </Select>
  )
}