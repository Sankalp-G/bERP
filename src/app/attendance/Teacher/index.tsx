import { AuthSession } from "@/lib/auth/utils";
import { getTeacherCourses } from "@/lib/db/actions";
import { Select, SelectItem } from "@nextui-org/react";
import CourseSelect from "./CourseSelect";

export default async function AddAttendance({ session }: AuthSession) {
  const courses = await getTeacherCourses(session!.user.id);

  return (
    <CourseSelect courses={courses ?? []} />
  );
}