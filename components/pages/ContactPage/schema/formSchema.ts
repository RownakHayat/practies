import { z, number } from "zod";

const formSchema = z.object({
  username: z.string().min(1, "Username must be at least 2 characters long"),
  email: z.string().email("must be type email"),
  dob: z.string(),
  gender: z.string(),
  form_date: z.string(),
  end_date: z.string(),
  review: z.number(),
  rating: z.number(),
  isAdult: z.boolean(),
});

export default formSchema;
