import { eq } from "drizzle-orm";
import { Elysia, t } from "elysia";
import { db } from "../db/client";
import { items } from "../db/schema";

export const itemsRoutes = new Elysia({ prefix: "/items" })
	.get("/", async () => {
		const rows = await db.select().from(items);
		return rows;
	})
	.get(
		"/:id",
		async ({ params, set }) => {
			const id = Number(params.id);
			if (Number.isNaN(id)) {
				set.status = 400;
				return { error: "invalid id" };
			}
			const [row] = await db.select().from(items).where(eq(items.id, id)).limit(1);
			if (!row) {
				set.status = 404;
				return { error: "not found" };
			}
			return row;
		},
		{ params: t.Object({ id: t.String() }) },
	)
	.post(
		"/",
		async ({ body, set }) => {
			await db.insert(items).values({ name: body.name });
			set.status = 201;
			return { ok: true };
		},
		{ body: t.Object({ name: t.String({ minLength: 1, maxLength: 255 }) }) },
	);
