import { AuthSession } from "@/lib/auth/utils";

export default async function AddAttendance({ session }: AuthSession) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold pb-2">Add Attendance</h1>
    </main>
  );
}