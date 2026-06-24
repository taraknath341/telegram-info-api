import express from "express";
import { telegramUserDetails, rootRoute } from "./controller.js";
import { userNameIsValid, errorHandleMiddleware } from "./middleware.js";

const app = express();

app.param("/:username", userNameIsValid);

app.get("/:username", telegramUserDetails);

app.get("/", rootRoute);

app.use(errorHandleMiddleware);

export default app;