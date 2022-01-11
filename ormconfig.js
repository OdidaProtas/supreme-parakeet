const environment = process.env.ENVIRONMENT;
const ext = environment === "debug" ? "ts" : "js";
const app = environment === "debug" ? "src" : "build";

module.exports = {
  type: "postgres",
  port: 5432,
  url: "postgres://pmjjufta:ouNsZK2l6u_BJAWcva7OAAnvYKPCeUTO@ella.db.elephantsql.com/pmjjufta",
  logging: false,
  entities: [`${app}/entity/**/*.${ext}`],
  migrations: [`${app}/migration/**/*.${ext}`],
  subscribers: [`${app}/s ubscriber/**/*.${ext}`],
  cli: {
    entitiesDir: `${app}/entity`,
    migrationsDir: `${app}/migration`,
    subscribersDir: `${app}/subscriber`,
  },
  // ssl: true,
  // extra: {
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  // },
};
