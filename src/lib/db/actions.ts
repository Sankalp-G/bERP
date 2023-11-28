import db from "./utils";

export type User = {
  id: number;
  email: string;
  role: string;
};

export async function getUser(email: string, password: string) {
  const user = await db.execute(
    "SELECT * FROM account WHERE email = ? AND passwordHash = ?",
    [email, password],
  );
  if (!user) return null;

  const userRows = user[0] as unknown as User[];
  if (userRows.length == 0) return null;

  return userRows[0];
}

export interface StudentProfile {
  id: number
  firstName: string
  lastName: string
  dob: Date
  contactNo: string
  email: string
}

export async function getStudentProfile(id: number) {
  const profile = await db.execute(`SELECT * FROM student WHERE id = ?`,
    [id],
  );
  if (!profile) return null;

  const profileRows = profile[0] as StudentProfile[];
  if (profileRows.length == 0) return null;

  return profileRows[0] as StudentProfile;
}

export interface TeacherProfile {
  id: number
  firstName: string
  lastName: string
  qualification: string
  contactNo: string
  email: string
}

export async function getTeacherProfile(id: number) {
  const profile = await db.execute(`SELECT * FROM teacher WHERE id = ?`,
    [id],
  );
  if (!profile) return null;

  const profileRows = profile[0] as TeacherProfile[];
  if (profileRows.length == 0) return null;

  return profileRows[0] as TeacherProfile;
}

interface Attendance {
  courseName: string
  department: string
  total_classes: number
  attended_classes: number
  absent_classes: number
}

export async function getStudentSubjectAttendance(studentId: number) {
  const attendance = await db.execute(
    `SELECT c.courseName, c.department,
        COUNT(*) AS total_classes,
        SUM(CASE WHEN a.attendanceStatus = 'P' THEN 1 ELSE 0 END) AS attended_classes,
        SUM(CASE WHEN a.attendanceStatus = 'A' THEN 1 ELSE 0 END) AS absent_classes
    FROM attendance a JOIN course c ON a.courseID = c.id
    WHERE a.studentID = ?
    GROUP BY c.courseName, c.department;`
    , [studentId]
  )

  if (!attendance) return null;

  return attendance[0] as Attendance[]
}

interface OverallAttendance {
  total_classes: number
  attended_classes: number
  absent_classes: number
}

export async function getStudentOverallAttendance(studentId: number) {
  const attendance = await db.execute(
    `SELECT
        COUNT(*) AS total_classes,
        SUM(CASE WHEN a.attendanceStatus = 'P' THEN 1 ELSE 0 END) AS attended_classes,
        SUM(CASE WHEN a.attendanceStatus = 'A' THEN 1 ELSE 0 END) AS absent_classes
    FROM attendance a JOIN course c ON a.courseID = c.id
    WHERE a.studentID = ?`
    , [studentId]
  )

  if (!attendance) return null;

  const attendanceRows = attendance[0] as OverallAttendance[]
  if (attendanceRows.length == 0) return null

  return attendanceRows[0]
}

interface Marks {
  courseName: string
  department: string
  labMarks: number
  testMarks: number
  projectMarks: number
}

export async function getStudentMarks(studentId: number) {
  const marks = await db.execute(
    `SELECT c.courseName, c.department, m.labMarks, m.testMarks, m.projectMarks
     FROM marks m JOIN course c ON m.courseID = c.id
     WHERE m.studentID = ?`
    , [studentId]
  )

  if (!marks) return null;

  return marks[0] as Marks[]
}

export interface TeacherCourse {
  id: number
  teacherId: number
  department: string
  courseName: string
  credits: number
  noOfHours: string
}

export async function getTeacherCourses(teacherId: number) {
  const courses = await db.execute(
    `SELECT * FROM course WHERE teacherID = ?`
    , [teacherId]
  )

  if (!courses) return null;

  return courses[0] as TeacherCourse[]
}

export async function getStudentsFromCourseId(courseID: number) {
  const students = await db.execute(
    `SELECT * FROM student s JOIN studentCourse sc
     ON s.id = sc.studentID
     WHERE sc.courseID = ?`
    , [courseID]
  )

  if (!students) return null;

  return students[0] as StudentProfile[]
}