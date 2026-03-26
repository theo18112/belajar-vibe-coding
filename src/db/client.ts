import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

function env(name: string, fallback?: string): string {
	const v = process.env[name] ?? fallback;
	if (v === undefined || v === "") {
		throw new Error(`Missing environment variable: ${name}`);
	}
	return v;
}

const pool = mysql.createPool({
	host: env("DB_HOST", "127.0.0.1"),
	user: env("DB_USER", "root"),
	password: process.env.DB_PASSWORD ?? "",
	database: env("DB_DATABASE", "app"),
	port: Number(process.env.DB_PORT ?? "3306"),
});

export const db = drizzle(pool, { schema, mode: "default" });

export async function pingDb(): Promise<boolean> {
	try {
		await pool.query("SELECT 1");
		return true;
	} catch {
		return false;
	}
}
