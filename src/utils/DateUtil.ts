const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export function parseDate(stringDate: string | Date): string {
  try {
    const date = new Date(stringDate);
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    return `${months[month]} ${day}, ${year}`;
  } catch (error) {
    console.log('Error while parsing date', error);
    return '';
  }
}
