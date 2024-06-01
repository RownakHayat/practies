import { z } from "zod";
import { parse, differenceInYears } from "date-fns";

const formSchema = z.object({
  username: z.string()
    .min(2, "Username must be at least 2 characters long")
    .max(50, "Username must be at most 50 characters long"),
  dob: z.string()
    .min(10, "Date of Birth is required")
    .refine((dob) => {
      const parsedDate = parse(dob, "yyyy-MM-dd", new Date());
      return !isNaN(parsedDate.getTime());
    }, { message: "Date of Birth must be a valid date" })
    .refine((dob) => {
      const parsedDate = parse(dob, "yyyy-MM-dd", new Date());
      const age = differenceInYears(new Date(), parsedDate);
      return age >= 18;
    }, { message: "You must be at least 18 years old" }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
  }),
});

export default formSchema;
