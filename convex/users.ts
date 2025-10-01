import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageURl: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("UserTable")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (user?.length == 0) {
      const dataa = {
        name: args.name,
        email: args.email,
        imageURl: args?.imageURl
      };
      const result = await ctx.db.insert("UserTable", { ...dataa });
      console.log(result);
      return {
        ...dataa,
        result
      };
    }
    return user[0];
  },
});
