import { z, number } from "zod";

const formSchema = z.object({
  name: z.string(),
  origin: z.string().min(1, { message: "This field is required" }),
  destination: z.string().min(1, { message: "This field is required" }),
});

export default formSchema;
