import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const positiveVirusCasesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.positiveVirusCases.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
});
