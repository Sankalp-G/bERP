import { Input } from "@nextui-org/react";

export default function Field({ label, value }: { label: string, value: string | undefined }) {
  return (
    <Input
      isReadOnly
      label={label}
      variant="bordered"
      defaultValue={value}
      className="max-w-xs"
    />
  )
}
