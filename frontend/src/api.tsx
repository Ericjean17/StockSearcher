import axios from "axios";
import type { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${import.meta.env.VITE_MY_API_KEY}`
    );
    return data;
  } catch (error) {
    return error instanceof Error ? error.message : "An error occurred";
  }
}