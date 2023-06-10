import { Context } from "elysia";

export default (ctx: Context) => {
    return {
        headers: ctx.headers,
        params: ctx.params
    };
}
