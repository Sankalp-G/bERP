import { Card, CardBody, Chip, Slider } from "@nextui-org/react";
import MarkSlider from "./MarkSlider";

interface Props {
  name: string;
  tag: string;
  testMarks: number;
  labMarks: number;
  projectMarks: number;
}

export default function MarkCard({
  name,
  tag,
  testMarks,
  labMarks,
  projectMarks,
}: Props) {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-center">
          <h1 className="text-lg">{name}</h1>
          <Chip className="border-blue-400" variant="bordered">{tag}</Chip>
        </div>

        <div className="flex flex-col gap-4 items-start mt-4">
          {/* <header className="flex-shrink-0">Class Test</header> */}
          <MarkSlider
            aria-label="Test Marks"
            color="foreground"
            hideThumb={true}
            value={testMarks}
            minValue={0}
            maxValue={40}
            label="Class Test"
          />
          <MarkSlider
            aria-label="Lab Marks"
            color="foreground"
            hideThumb={true}
            value={labMarks}
            minValue={0}
            maxValue={40}
            label="Lab Practical"
          />
          <MarkSlider
            aria-label="Project Marks"
            color="primary"
            hideThumb={true}
            value={projectMarks}
            minValue={0}
            maxValue={20}
            label="Project"
          />
        </div>
      </CardBody>
    </Card>
  );
}
