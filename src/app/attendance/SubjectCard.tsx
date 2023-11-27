import { Card, CardBody, CircularProgress, Chip, Divider } from "@nextui-org/react";

interface Props {
  name: string
  tag: string
  total: number
  absent: number
  present: number
}

export default function SubjectCard({ name, tag, total, absent, present }: Props) {
  return (
    <Card className="w-full p-4 shadow-md">
      <CardBody className="flex flex-row gap-4">
        <CircularProgress
          classNames={{
            svg: "w-32 h-32 drop-shadow-md",
            indicator: "stroke-primary-400",
            track: "stroke-gray-400/10",
            value: "text-2xl font-semibold text-gray-600",
          }}
          value={present / total * 100}
          strokeWidth={4}
          showValueLabel={true}
        />
        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-semibold">{name}</h2>
            {/* <Chip
              classNames={{
                base: "border-1 border-gray/30",
                content: "text-gray/90 text-sm font-semibold",
              }}
              variant="light"
              size="sm"
            >
              {tag}
            </Chip> */}
          </div>

          <Divider className="my-1" />

          <div className="flex justify-between w-full">
            Total Lectures:
            <div className="font-bold pr-4">{total}</div>
          </div>

          <div className="flex justify-between w-full">
            Absent:
            <div className="font-bold pr-4">{absent}</div>
          </div>

          <div className="flex justify-between w-full">
            Present:
            <div className="font-bold pr-4">{present}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
