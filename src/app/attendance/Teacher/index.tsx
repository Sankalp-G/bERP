import { AuthSession } from "@/lib/auth/utils";
import { getTeacherCourses } from "@/lib/db/actions";
import { Select, SelectItem } from "@nextui-org/react";
import CourseSelect from "./CourseSelect";

export default async function AddAttendance({ session }: AuthSession) {
  const courses = await getTeacherCourses(session!.user.id);

  return (
    <main className="p-8">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl font-semibold pb-2">Add Attendance</h1>

        <CourseSelect courses={courses ?? []} />

      </div>
    </main>
  );
}