import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getProjects, getPublications, getSkills, createContactSubmission, getContactSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Portfolio routes
  portfolio: router({
    /**
     * Get all published projects
     */
    getProjects: publicProcedure.query(async () => {
      return await getProjects();
    }),

    /**
     * Get all publications
     */
    getPublications: publicProcedure.query(async () => {
      return await getPublications();
    }),

    /**
     * Get all skills grouped by category
     */
    getSkills: publicProcedure.query(async () => {
      return await getSkills();
    }),

    /**
     * Submit contact form
     */
    submitContact: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters"),
          email: z.string().email("Invalid email address"),
          subject: z.string().min(5, "Subject must be at least 5 characters"),
          message: z.string().min(10, "Message must be at least 10 characters"),
          fileUrl: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const submission = await createContactSubmission({
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message,
            fileUrl: input.fileUrl,
            status: "new",
          });

          // Notify owner about new contact submission
          await notifyOwner({
            title: `New Contact Submission from ${input.name}`,
            content: `Subject: ${input.subject}\n\nMessage: ${input.message}\n\nFrom: ${input.email}`,
          });

          return {
            success: true,
            message: "Your message has been sent successfully!",
          };
        } catch (error) {
          console.error("Failed to submit contact form:", error);
          throw new Error("Failed to submit contact form");
        }
      }),

    /**
     * Get all contact submissions (admin only)
     */
    getContactSubmissions: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getContactSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
