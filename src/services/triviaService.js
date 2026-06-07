import axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=10";

export async function getTriviaQuestions() {
  const response = await axios.get(API_URL);
  return response.data.results;
}