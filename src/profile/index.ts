import { App } from "@minimajs/app";
import { getUser } from "../auth";

function getProfile() {
  return getUser();
}

export async function profileModule(app: App) {
  app.get("/", getProfile);
}
