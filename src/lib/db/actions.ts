import client from "./utils";

export type User = {
  id: number;
  email: string;
  role: string;
};

export async function getUser(email: string, password: string) {
  const user = await client.execute({
    sql: "SELECT * FROM account WHERE email = ? AND passwordHash = ?",
    args: [email, password],
  });
  if (!user) return null;

  const userRows = user.rows as unknown as User[];
  if (userRows.length == 0) return null;

  return userRows[0];
}

export async function getProfile(user: User) {
  const role = user.role == 'student' ? 'student' : user.role == 'teacher' ? 'teacher' : null;

  if (!role) return null;

  const profile = await client.execute({
    sql: `SELECT * FROM ${role} WHERE id = ?`,
    args: [user.id],
  });
  if (!profile) return null;

  const profileRows = profile.rows as unknown as User[];
  if (profileRows.length == 0) return null;

  return profileRows[0];
}
