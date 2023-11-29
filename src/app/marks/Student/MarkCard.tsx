'use client'

import { Card, CardBody, Chip, Slider } from "@nextui-org/react";
import MarkSlider from "./MarkSlider";
import { useState } from "react";

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
  const [marks, setMarks] = useState({
    test: testMarks,
    lab: labMarks,
    project: projectMarks,
  });

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
            value={marks.test}
            // @ts-expect-error
            onChange={(value) => setMarks({ ...marks, test: value })}
            minValue={0}
            maxValue={40}
            label="Class Test"
          />
          <MarkSlider
            aria-label="Lab Marks"
            color="foreground"
            hideThumb={true}
            value={marks.lab}
            // @ts-expect-error
            onChange={(value) => setMarks({ ...marks, lab: value })}
            minValue={0}
            maxValue={40}
            label="Lab Practical"
          />
          <MarkSlider
            aria-label="Project Marks"
            color="primary"
            hideThumb={true}
            value={marks.project}
            // @ts-expect-error
            onChange={(value) => setMarks({ ...marks, project: value })}
            minValue={0}
            maxValue={20}
            label="Project"
          />
        </div>
      </CardBody>
    </Card>
  );
}
