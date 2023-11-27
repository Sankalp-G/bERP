import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
} from "@nextui-org/react";
import OverallPercentage from "./OverallPercentage";
import { checkAuth } from "@/lib/auth/utils";
import OverallStats from "./OverallStats";
import SubjectCard from "./SubjectCard";

export default async function Attendance() {
  await checkAuth();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold pb-2">Attendance</h1>
      <div className="flex gap-4 items-start">
        <OverallPercentage percentage={80} />

        <OverallStats total={100} present={80} absent={20} />
      </div>

      <h1 className="text-2xl font-semibold pt-8 pb-2">Subject Wise</h1>

      <div className="grid grid-cols-3">
        <SubjectCard name={"Mat"} tag="Mathematics" absent={22} present={44} total={66} />
      </div>
    </main>
  );
}
