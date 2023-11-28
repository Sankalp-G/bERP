import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Field from "./Field";
import { StudentProfile, TeacherProfile } from "@/lib/db/actions";
import { DateTime } from "luxon";

export default function TeacherProfile({ profile, email }: { profile: TeacherProfile, email?: string }) {

  return (
    <div className='flex items-center justify-center h-full'>
      <Card className='w-full max-w-xl p-2'>
        <CardHeader>Profile</CardHeader>
        <CardBody className='grid grid-cols-2 gap-4'>
          <Field label="firstName" value={profile?.firstName} />
          <Field label="lastName" value={profile?.lastName} />
          <Field label="Email" value={email} />
          <Field label="ID" value={profile?.id.toString()} />
          <Field label="Contact No" value={profile?.contactNo} />
          <Field label="Qualification" value={profile?.qualification} />
        </CardBody>
      </Card>
    </div>
  )
}