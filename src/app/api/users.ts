import { User } from "@/src/types/user";

const users: User[] = [
  {
    id: "1",
    username: "Brzynia",
    password: "player123",
    role: "player",
    email: "brzynia@pog.champ",
  },
  {
    id: "2",
    username: "Mix",
    email: "mix@gey.rizz",
    password: "dm123",
    role: "dm",
  },
];

export const addUser = (user: Omit<User, "id">) => {
  const id = String(users.length + 1);
  users.push({ ...user, id });
};

export const findUser = (email: string) => {
  return users.find((user) => email === user.email);
};

export const authorize = (email: string, password: string) => {
  return users.find(
    (user) => email === user.email && password === user.password
  );
};
