import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  role: text("role", { enum: ["buyer", "cp", "developer"] }).notNull(),
  password: text("password").notNull(),
  
  // Channel Partner specific
  companyName: text("company_name"),
  
  // Developer specific
  contactPerson: text("contact_person"),
  gstNumber: text("gst_number"),
  reraNumber: text("rera_number"),
  isReraRegistered: boolean("is_rera_registered").default(false),
  docLink: text("doc_link"),
  
  // Buyer specific
  budget: text("budget"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LoginData = z.infer<typeof loginSchema>;
