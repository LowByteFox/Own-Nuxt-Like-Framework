import Elysia from "elysia";
import { bux } from "./plugin";

const app = new Elysia();

app.use(bux);
