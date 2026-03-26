import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

/** Contoh entitas untuk satu alur baca/tulis DB (MVP). */
export const items = mysqlTable("items", {
	id: int("id").autoincrement().primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Item = typeof items.$inferSelect;
export type NewItem = typeof items.$inferInsert;
