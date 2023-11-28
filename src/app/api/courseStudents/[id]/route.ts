import { getStudentsFromCourseId } from "@/lib/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (isNaN(id)) {
    return NextResponse.error()
  }

  const students = await getStudentsFromCourseId(id)

  return NextResponse.json(students)
}
