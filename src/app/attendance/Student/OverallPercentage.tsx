import { Card, CardBody, CircularProgress, CardHeader, Chip } from "@nextui-org/react";

export default function OverallPercentage({ percentage }: { percentage: number }) {
  return (
    <Card className="w-[240px] h-[240px]">
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-primary-400",
              track: "stroke-gray-400/10",
              value: "text-3xl font-semibold text-gray-600",
            }}
            value={percentage}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
        <CardHeader className="justify-center items-center pt-0">
          <Chip
            classNames={{
              base: "border-1 border-gray/30",
              content: "text-gray/90 text-md font-semibold",
            }}
            variant="bordered"
          >
            Overall Attendance
          </Chip>
        </CardHeader>
      </Card>
  )
}