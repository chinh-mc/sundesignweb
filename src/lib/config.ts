export const env = process.env.NODE_ENV;

export const URL_WEBSITE =
    env === "development"
      ? "http://localhost:6789"
      : process.env.URL_WEBSITE;