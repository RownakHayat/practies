import { z, number } from "zod";

const formSchema = z.object({
  username: z.string().min(1, {message: "Username must be at least 2 characters long"}),
  email: z.string().min(1, {message: "Username must be at least 2 characters long"}),
  gender: z.string(),
  to_days: z.string(),
  review: z.string(),
  rating: z.number(),
  isAdult: z.boolean(),
});

export default formSchema;