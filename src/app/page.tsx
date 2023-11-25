import { checkAuth } from "@/lib/auth/utils"
import { getServerSession } from "next-auth"

export default async function Home() {
  await checkAuth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-slate-500">

      </div>
    </main>
  )
}
