export type BookStatus = 'reading' | 'want-to-read' | 'finished';

export type Book = {
  title: string;
  author: string;
  status: BookStatus;
  postSlug?: string;
};

export const books: Book[] = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'finished',
    postSlug: 'atomic-habits-book-summary',
  },
  {
    title: 'Drive',
    author: 'Daniel H. Pink',
    status: 'finished',
  },
  {
    title: 'Hooked',
    author: 'Nir Eyal',
    status: 'finished',
  },
  {
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    status: 'finished',
    postSlug: 'win-friends-and-influence-people-dale-carnegie',
  },
  {
    title: 'Lost and Founder',
    author: 'Rand Fishkin',
    status: 'finished',
  },
  {
    title: 'The Rational Optimist',
    author: 'Matt Ridley',
    status: 'want-to-read',
  },
  {
    title: 'Rework',
    author: 'Jason Fried and David Heinemeier Hansson',
    status: 'finished',
  },
  {
    title: 'Traction',
    author: 'Gabriel Weinberg and Justin Mares',
    status: 'finished',
  },
  {
    title: "It Doesn't Have to Be Crazy at Work",
    author: 'Jason Fried and David Heinemeier Hansson',
    status: 'finished',
  },
  {
    title: 'The Pricing Roadmap',
    author: 'Ulrik Lehrskov-Schmidt',
    status: 'want-to-read',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    status: 'finished',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: 'reading',
  },
  {
    title: 'Start With Why',
    author: 'Simon Sinek',
    status: 'finished',
  },
  {
    title: "The Manager's Path",
    author: 'Camille Fournier',
    status: 'finished',
    postSlug: 'the-managers-path-book-summary',
  },
];

export const getBooksByStatus = (status: BookStatus) =>
  books
    .filter((book) => book.status === status)
    .sort((a, b) => a.title.localeCompare(b.title));
