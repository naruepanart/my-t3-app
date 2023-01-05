import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
  users0: publicProcedure.query(async ({}) => {
    const f = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = f.data;
    return users;
  }),
  users1: publicProcedure.query(async ({}) => {
    const f = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = f.data;
    return users;
  }),
});
