import { Context } from "elysia"

export default (ctx: Context) => {
    return ctx.request.method;
}
