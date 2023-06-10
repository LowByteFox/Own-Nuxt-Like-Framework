import { Context } from "elysia";

export default (ctx: Context) => {
    console.log(ctx.query);
    return "Hello, world!";
}
// Very simple middleware (https://elysiajs.com/concept/middleware.html)
export const beforeHandle = (_: any) => {
    console.log("Before handle");
}
