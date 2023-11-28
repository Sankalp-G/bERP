import { checkAuth, getUserAuth } from "@/lib/auth/utils";
import StudentAttendance from "./Student";
import AddAttendance from "./Teacher";

export default async function Attendance() {
  await checkAuth();

  const { session } = await getUserAuth();

  if (session?.user.role == 'teacher') {
    return (
      <AddAttendance session={session} />
    )
  }

  if (session?.user.role == 'student') {
    return (
      <StudentAttendance session={session} />
    )
  }
}
