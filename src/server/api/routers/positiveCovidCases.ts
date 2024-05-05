import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const positiveCovidCasesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.positiveCovidCases.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
});
