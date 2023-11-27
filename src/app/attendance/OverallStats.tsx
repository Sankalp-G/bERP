import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { Heading } from "lucide-react";

interface Props {
  total: number;
  present: number;
  absent: number;
}

export default async function OverallStats({ total, present, absent }: Props) {
  return (
    <div className="flex gap-4">
      <Card className="w-[200px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
          <h2 className="text-sm font-medium">Total Lectures</h2>
        </CardHeader>
        <CardBody>
          <div className="text-2xl font-bold">{total}</div>
        </CardBody>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
          <h2 className="text-sm font-medium">Present</h2>
        </CardHeader>
        <CardBody>
          <div className="text-2xl font-bold text-green-700">{present}</div>
        </CardBody>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
          <h2 className="text-sm font-medium">Absent</h2>
        </CardHeader>
        <CardBody>
          <div className="text-2xl font-bold text-red-600">{absent}</div>
        </CardBody>
      </Card>
    </div>
  );
}
