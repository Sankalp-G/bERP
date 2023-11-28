import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import { getStudentProfile, getTeacherProfile } from '@/lib/db/actions';
import StudentProfile from './Student';
import TeacherProfile from './Teacher';

export default async function Profile() {
  await checkAuth()

  const { session } = await getUserAuth()

  if (session?.user.role == 'student') {
    const profile = await getStudentProfile(session.user.id)
    if (!profile) return null

    return (
      <StudentProfile profile={profile} email={session.user.email} />
    )
  }

  if (session?.user.role == 'teacher') {
    const profile = await getTeacherProfile(session.user.id)
    if (!profile) return null

    return (
      <TeacherProfile profile={profile} email={session.user.email} />
    )
  }
}