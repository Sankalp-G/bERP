import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import { getProfile } from '@/lib/db/actions';
import { getServerSession } from 'next-auth'
import {  } from 'next-auth/react'

export default async function Profile() {
  await checkAuth()

  const { session } = await getUserAuth()

  const profile = await getProfile(session!.user);

  return (
    <div>
      {JSON.stringify(profile)}
    </div>
  )
}