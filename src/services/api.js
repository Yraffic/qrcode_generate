import axios from "axios"

export const api = axios.create({
  baseURL: "https://lobster-app-2uk99.ondigitalocean.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})