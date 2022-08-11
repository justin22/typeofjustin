const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseDate(string) {
  try {
    const date = new Date(string);
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    return `${months[month]} ${day}, ${year}`  
  } catch (error) {
    console.log(`Error while parsing date`, error);
  } 
}

module.exports = {
  parseDate
}