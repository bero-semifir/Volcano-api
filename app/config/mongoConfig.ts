import { CallbackError, connect } from "mongoose";

const MONGO_URL = process.env["MONGO_URL"] || "localhost";
const MONGO_PORT = process.env["MONGO_PORT"] || "27017";
const MONGO_DB = process.env["MONGO_DB"] || "volcanoapp";
const MONGO_USER = process.env["MONGO_USER"] || "";
const MONGO_PASSWORD = process.env["MONGO_PASSWORD"] || "";

export const dbConnect = () => {
  let connectString = "";
  if (MONGO_USER != "" && MONGO_PASSWORD != "") {
    connectString = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}:${MONGO_PORT}/${MONGO_DB}`;
  } else {
    connectString = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_DB}`;
  }
  connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err: CallbackError) => console.log(err));
};
