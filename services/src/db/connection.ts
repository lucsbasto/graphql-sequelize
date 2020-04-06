import { Sequelize } from "sequelize-typescript";

import acessEnv from "#root/helpers/acessEnv";
import models from "./models";
const DB_URL = acessEnv("DB_URL");

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false,
  models
});

export default sequelize;
