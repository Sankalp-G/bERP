import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import { getProfile } from '@/lib/db/actions';
import {Card, CardHeader, CardBody, Input} from "@nextui-org/react";
import { DateTime } from 'luxon';

interface StudentProfile {
  id: number
  firstName: string
  lastName: string
  dob: string
  contactNo: string
  email: string
}

function Field({ label, value }: { label: string, value: string | undefined }) {
  return (
    <Input
      isReadOnly
      label={label}
      variant="bordered"
      defaultValue={value}
      className="max-w-xs"
    />
  )
}

export default async function Profile() {
  await checkAuth()

  const { session } = await getUserAuth()

  const profile = await getProfile(session!.user) as unknown as StudentProfile;

  function formatDate(date: string) {
    return DateTime.fromISO(profile.dob.toString()).toLocaleString(DateTime.DATE_MED)
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <Card className='w-full max-w-xl p-2'>
        <CardHeader>Profile</CardHeader>
        <CardBody className='grid grid-cols-2 gap-4'>
          <Field label="firstName" value={profile?.firstName} />
          <Field label="lastName" value={profile?.lastName} />
          <Field label="Email" value={session?.user?.email} />
          <Field label="ID" value={profile?.id.toString()} />
          <Field label="Contact No" value={profile?.contactNo} />
          <Field label="DOB" value={formatDate(profile.dob)} />
        </CardBody>
      </Card>
    </div>
  )
}