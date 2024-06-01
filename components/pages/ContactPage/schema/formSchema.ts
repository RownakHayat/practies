import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long").max(50, "Username must be at most 50 characters long"),
  dob: z.string().min(2, "Date of Birth is required"), // Assuming dob is a string for simplicity
  gender: z.array(z.string()).length(2).parseAsync(["male", "female", "other"])
});

export default formSchema;
