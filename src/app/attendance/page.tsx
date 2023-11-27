import OverallPercentage from "./OverallPercentage";
import { checkAuth, getUserAuth } from "@/lib/auth/utils";
import OverallStats from "./OverallStats";
import SubjectCard from "./SubjectCard";
import {
  getStudentOverallAttendance,
  getStudentSubjectAttendance,
} from "@/lib/db/actions";

export default async function Attendance() {
  await checkAuth();

  const { session } = await getUserAuth();

  const overallAttendance = await getStudentOverallAttendance(session!.user.id);

  const subjectAttendance = await getStudentSubjectAttendance(session!.user.id);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold pb-2">Attendance</h1>
      <div className="flex gap-4 items-start">
        <OverallPercentage percentage={((overallAttendance?.attended_classes ?? 0) / (overallAttendance?.total_classes ?? 0)) * 100} />

        <OverallStats
          total={overallAttendance?.total_classes ?? 0}
          present={overallAttendance?.attended_classes ?? 0}
          absent={overallAttendance?.absent_classes ?? 0}
        />
      </div>

      <h1 className="text-2xl font-semibold pt-8 pb-2">Subject Wise</h1>

      <div className="grid grid-cols-3 gap-4">
        {subjectAttendance?.map((item, index) => (
          <SubjectCard
            key={index}
            name={item.courseName}
            tag={item.department}
            absent={item.absent_classes}
            present={item.attended_classes}
            total={item.total_classes}
          />
        ))}
      </div>
    </main>
  );
}
