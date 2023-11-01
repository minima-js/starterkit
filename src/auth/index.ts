import { createHeaders, string } from "@minimajs/schema";
import { createAuth } from "./auth";
import { abort } from "@minimajs/app";

export interface User {
  id: string;
  name: string;
}

const getHeader = createHeaders({
  "x-user": string().required(),
});

export const [authInterceptor, authGuard, getUser] = createAuth(async () => {
  const payload = getHeader()["x-user"];
  try {
    return JSON.parse(payload) as User;
  } catch (err) {
    abort("invalid authentication token", "UNAUTHORIZED");
  }
});
