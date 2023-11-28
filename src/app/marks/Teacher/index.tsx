import { AuthSession } from "@/lib/auth/utils";
import { getTeacherCourses } from "@/lib/db/actions";
import CourseSelect from "./CourseSelect";

export default async function TeacherPage({ session }: { session: AuthSession["session"] }) {
  const courses = await getTeacherCourses(session!.user.id);

  return (
    <CourseSelect courses={courses ?? []} />
  );
}