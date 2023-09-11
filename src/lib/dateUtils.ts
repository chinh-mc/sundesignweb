import moment from "moment";

export const convertUTCDateToLocalDate = (date: string, format =  'YYYY-MM-DD HH:mm:ss') => {
  var local = moment.utc(date).local().format(format);
  return local
}