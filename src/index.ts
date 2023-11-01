import { App, createApp, interceptor } from "@minimajs/app";
import { userModule } from "./user";
import { authGuard, authInterceptor } from "./auth";
import { profileModule } from "./profile";

const app = createApp();

async function registerModules(app: App) {
  app.register(userModule, { prefix: "/users" });
  app.register(interceptor([authGuard], profileModule), { prefix: "/profile" });
}

app.register(interceptor([authInterceptor], registerModules));

await app.listen({ port: 1234 });
