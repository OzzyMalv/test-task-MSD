import { positiveCovidCasesRouter } from "~/server/api/routers/positiveCovidCases";
import { positiveVirusCasesRouter } from "~/server/api/routers/positiveVirusCases";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  positiveCovidCases: positiveCovidCasesRouter,
  positiveVirusCases: positiveVirusCasesRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
