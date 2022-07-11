import { PrismaClient } from "./generated/client/deno.ts";
import { serve } from "https://deno.land/std@0.147.0/http/server.ts";
import "https://deno.land/std@0.147.0/dotenv/mod.ts";

const prisma = new PrismaClient();

serve(async () => {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users, null, 2));
});
