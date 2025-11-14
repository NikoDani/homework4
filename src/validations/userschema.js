import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1,"First Name cannot be empty").regex(/^[a-zA-Zა-ჰ]+$/,"Only letters allowed"),
  lastName: z.string().min(1,"Last Name cannot be empty").regex(/^[a-zA-Zა-ჰ]+$/,"Only letters allowed"),
  email:z.string().email("Looks like this is not an email"),
  password:z.string().min(6,"Password must be at least 6 characters").regex(/^[a-zA-Z0-9]+$/,"Password must contain only letters or numbers"),
});
    