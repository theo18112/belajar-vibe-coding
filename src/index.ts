import { Elysia } from "elysia";
import { pingDb } from "./db/client";
import { itemsRoutes } from "./routes/items";

const port = Number(process.env.PORT ?? "3000");

const app = new Elysia()
	.get("/health", async () => {
		const dbOk = await pingDb();
		return { status: "ok", db: dbOk ? "ok" : "error" };
	})
	.use(itemsRoutes)
	.listen(port);

console.log(`Listening on http://${app.server?.hostname}:${app.server?.port}`);
