export const convertDate = (date) => {
  let dateObject = new Date(date);
  let seconds = dateObject.getTime() / 1000; 
  return seconds;
}