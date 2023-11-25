"use client";

import { cn } from "@/lib/utils";
import { Divider, Avatar } from "@nextui-org/react";
import { Bricolage_Grotesque } from "next/font/google";
import { signOut } from "next-auth/react";
import {
  School,
  ListChecks,
  UserSquare2,
  PanelLeft,
  CalendarRange,
  LogOut,
} from "lucide-react";
import clsx from "clsx";
import React from "react";
import NavButton from "./NavButton";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

const profile = {
  name: "John Doe",
  id: "1032220225",
}

function StudentItems() {
  return (
    <>
      <h2 className="px-4 pt-3 text-xs font-semibold tracking-tight text-gray-500 uppercase">
        Academics
      </h2>

      <NavButton to="/attendance">
        <CalendarRange size={20} />
        Attendance
      </NavButton>

      <NavButton to="/marks">
        <ListChecks size={20} />
        Marks Alloted
      </NavButton>

      <NavButton className="mt-auto" color={'danger'} onClick={() => signOut()}>
        <LogOut size={20} />
        Sign Out
      </NavButton>
    </>
  )
}

export function Sidebar({ className }: { className: string }) {
  return (
    <div className={cn("pb-12 border-r-2 border-[#E9EBEF]", className)}>
      <div className="space-y-4 pt-4 h-screen flex flex-col">
        <div className="px-3 py-2 flex-1 flex flex-col">
          <h1
            className={clsx(
              "flex items-center gap-3 mb-2 px-4 text-2xl font-semibold tracking-tight",
              bricolage.className
            )}
          >
            <div className="p-2 -m-2 rounded-md bg-primary-50 opacity-80">
              <School
                className="text-primary-500"
                size={20}
                strokeWidth={2.25}
              />
            </div>
            bERP
          </h1>
          <Divider className="bg-gray-100 mb-2" />
          <div className="flex flex-col gap-1 flex-1">
            <NavButton to="/">
              <PanelLeft size={20} />
              Dashboard
            </NavButton>

            <NavButton to="/profile">
              <UserSquare2 size={20} />
              Profile
            </NavButton>

            <StudentItems />
          </div>
        </div>

        <div className="flex bg-[#EFF3F6] p-3" style={{ marginTop: "auto" }}>
          <Avatar size="sm" />
          <div className="flex flex-col ml-2">
            <span className="text-xs font-semibold">{profile.name}</span>
            <span className="text-xs text-gray-500">{profile.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
