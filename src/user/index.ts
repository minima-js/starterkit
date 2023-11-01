import { type App } from "@minimajs/app";
import { createBody, string } from "@minimajs/schema";

type User = ReturnType<typeof getBody>;

const users: User[] = [];

const getBody = createBody({
  name: string().required(),
});

function createUser() {
  const user = getBody();
  users.push(user);
  return user;
}

function getUsers() {
  return users;
}

export async function userModule(app: App) {
  app.get("/", getUsers);
  app.post("/", createUser);
}
