import { Button, ButtonProps } from "@nextui-org/react";
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";


export interface NavButtonProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
  to?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void 
}

export default function NavButton({ className, children, to, onClick, ...props }: NavButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant="light"
      color="primary"
      className={cn("w-full justify-start gap-3 min-w-0", className)}
      onClick={(e) => {
        if (to) router.push(to)
        if (onClick) onClick(e)
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
