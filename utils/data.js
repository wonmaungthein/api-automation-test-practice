import { getData } from "./api-auth.js";
import  { urls } from "./endpoints.js";
const baseUrl = urls.baseUrl;

export const data = async () => {
    const allData = await getData(baseUrl)
    return allData;
}