import db from "@/lib/db/utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

  const body = await request.json()

  const attendance = body.attendance
  const date = body.date
  const courseId = body.courseId

  attendance.forEach(async (student) => {
    const result = await db.execute(`
      INSERT INTO attendance VALUES (?, ?, ?, ?)
    `, [courseId, student.studentId, date, student.status])
    console.log(result)
    console.log(await result)
  })

  return NextResponse.json({ message: "success" })
}