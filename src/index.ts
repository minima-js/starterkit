import { createApp } from "@minimajs/app";
import { userModule } from "./user";

const app = createApp();

app.register(userModule, { prefix: "/users" });

await app.listen({ port: 1234 });
