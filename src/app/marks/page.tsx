import { Card, CardBody, Chip, Slider } from "@nextui-org/react";

export default function MarksPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold pb-2">Marks allotted</h1>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <h1 className="text-lg">Mathematics</h1>
              <Chip variant="bordered">DDCA</Chip>
            </div>

            <div className="flex flex-col gap-4 items-start mt-4">
              {/* <header className="flex-shrink-0">Class Test</header> */}
              <Slider
                aria-label="Player progress"
                color="foreground"
                hideThumb={true}
                defaultValue={28}
                minValue={0}
                maxValue={40}
                label="Class Test"
              />
              <Slider
                aria-label="Player progress"
                color="foreground"
                hideThumb={true}
                defaultValue={32}
                minValue={0}
                maxValue={40}
                label="Lab Practical"
              />
              <Slider
                aria-label="Player progress"
                color="foreground"
                hideThumb={true}
                defaultValue={18}
                minValue={0}
                maxValue={20}
                label="Project"
              />
            </div>

          </CardBody>
        </Card>
      </div>
    </main>
  )
}