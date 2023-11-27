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

interface StudentProfile {
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
