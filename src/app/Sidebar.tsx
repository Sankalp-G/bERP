"use client"

import { cn } from "@/lib/utils"
import { Button, Divider, Avatar } from "@nextui-org/react";
import { Bricolage_Grotesque } from "next/font/google";
import { School, ListChecks, UserSquare2, PanelLeft, CalendarRange } from "lucide-react";
import clsx from "clsx";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export function Sidebar({ className }: { className: string }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 pt-4 h-screen flex flex-col">
        <div className="px-3 py-2">
          <h1 className={clsx("flex items-center gap-3 mb-2 px-4 text-2xl font-semibold tracking-tight", bricolage.className)}>
            <div className="p-2 -m-2 rounded-md bg-primary-50 opacity-80">
              <School className="text-primary-500" size={20} strokeWidth={2.25} />
            </div>
            bERP
          </h1>
          <Divider className="bg-gray-100 mb-2" />
          <div className="flex flex-col gap-1">
            <Button variant="light" color="primary" className="w-full justify-start gap-3 min-w-0">
              <PanelLeft size={20} />
              Dashboard
            </Button>

            <h2 className="px-4 pt-3 text-xs font-semibold tracking-tight text-gray-500 uppercase">Academics</h2>

            <Button variant="light" color="primary" className="w-full justify-start gap-3 min-w-0">
              <CalendarRange size={20}  />
              Attendance
            </Button>

            <Button variant="light" color="primary" className="w-full justify-start gap-3 min-w-0">
              <ListChecks size={20} />
              Marks Alloted
            </Button>

            <Button variant="light" color="primary" className="w-full justify-start gap-3 min-w-0">
              <UserSquare2 size={20} />
              Profile
            </Button>

          </div>
        </div>

        <div className="flex bg-[#EFF3F6] p-3" style={{ marginTop: 'auto' }}>
          <Avatar size="sm" src="" />
        </div>
      </div>
    </div>
  )
}