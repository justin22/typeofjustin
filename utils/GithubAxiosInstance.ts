import axios from "axios";

const githubAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_ISSUES_URL,
  headers: {
    "Authorization": `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`
  }
});

export default githubAxiosInstance;