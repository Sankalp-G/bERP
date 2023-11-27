import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import { getStudentProfile } from '@/lib/db/actions';
import {Card, CardHeader, CardBody, Input} from "@nextui-org/react";
import { DateTime } from 'luxon';

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

  const profile = await getStudentProfile(session!.user.id);

  function formatedDate() {
    if (!profile?.dob) return ''
    return DateTime.fromJSDate(profile.dob).toLocaleString(DateTime.DATE_MED)
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
          <Field label="DOB" value={formatedDate()} />
        </CardBody>
      </Card>
    </div>
  )
}