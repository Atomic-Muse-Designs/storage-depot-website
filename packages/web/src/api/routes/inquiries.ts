import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

export const inquiries = {
  create: base
    .input(
      z.object({
        name: z.string().trim().min(1).max(120),
        email: z.string().trim().email().max(200),
        phone: z.string().trim().max(40).optional(),
        size: z.string().trim().max(60).optional(),
        timing: z.string().trim().max(200).optional(),
        message: z.string().trim().max(4000).optional(),
      }),
    )
    .handler(async ({ input }) => {
      const [row] = await db.insert(schema.inquiries).values(input).returning({ id: schema.inquiries.id });
      return { ok: true, id: row.id };
    }),
};
