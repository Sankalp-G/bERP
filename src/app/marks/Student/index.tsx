import { AuthSession } from "@/lib/auth/utils";
import { getStudentMarks } from "@/lib/db/actions";
import MarkCard from "./MarkCard";

export default async function MarksPage({ session }: { session: AuthSession["session"] }) {
  const marks = await getStudentMarks(session!.user.id);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold pb-2">Marks allotted</h1>

      <div className="grid grid-cols-2 gap-4">
        {marks?.map((item, index) => (
          <MarkCard key={index} name={item.courseName} tag={item.department} labMarks={item.labMarks} testMarks={item.testMarks} projectMarks={item.projectMarks} />
        ))}
      </div>
    </main>
  )
}