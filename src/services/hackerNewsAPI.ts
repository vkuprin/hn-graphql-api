import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const getTopStories = async () => {
  const response = await axios.get(`${BASE_URL}/topstories.json?print=pretty`);
  return response.data;
};

export const getStoryDetails = async (storyId: number) => {
  const response = await axios.get(
    `${BASE_URL}/item/${storyId}.json?print=pretty`,
  );
  return response.data;
};

let cachedTopStories: number[] = [];
let lastFetchTime: number = 0;

export const fetchTopStoriesIfNeeded = async () => {
  const currentTime = Date.now();
  if (currentTime - lastFetchTime > 300000) {
    // 5 minutes
    cachedTopStories = await getTopStories();
    lastFetchTime = currentTime;
  }
  return cachedTopStories;
};
