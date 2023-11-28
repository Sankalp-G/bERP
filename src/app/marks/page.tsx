import { getUserAuth } from "@/lib/auth/utils";
import MarksPage from "@/app/marks/Student";
import TeacherPage from "./Teacher";

export default async function Marks() {
  const { session } = await getUserAuth();

  if (session?.user.role == 'student') {
    return (
      <MarksPage session={session} />
    )
  }

  if (session?.user.role == 'teacher') {
    return (
      <TeacherPage session={session} />
    )
  }
}