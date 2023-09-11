export const env = process.env.NODE_ENV;

export const URL_WEBSITE =
    env === "development"
      ? "http://localhost:3000"
      : process.env.URL_WEBSITE;