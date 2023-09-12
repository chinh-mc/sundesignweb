export const env = process.env.NODE_ENV;

export const URL_WEBSITE =
    env === "development"
      ? "http://localhost:3000"
      : process.env.URL_WEBSITE;

export const STATUS_CONTACT = {
  NEW_CONTACT: 'LIÊN HỆ MỚI',
  CONTACTED: 'ĐÃ LIÊN HỆ',
  SUCCESS: 'CHỐT DEAL',
  FAIL: 'KHÔNG THÀNH CÔNG'
}