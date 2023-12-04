import {
  fetchTopStoriesIfNeeded,
  getTopStories,
  getStoryDetails,
} from "../../services/hackerNewsAPI";

describe("Hacker News API - fetchTopStoriesIfNeeded", () => {
  it("should return an array of story IDs", async () => {
    const storyIds = await fetchTopStoriesIfNeeded();
    expect(Array.isArray(storyIds)).toBeTruthy();
    expect(storyIds.length).toBeGreaterThan(0);
  });

  it("should return the same array of story IDs if called within 5 minutes", async () => {
    const storyIds1 = await fetchTopStoriesIfNeeded();
    const storyIds2 = await fetchTopStoriesIfNeeded();
    expect(storyIds1).toEqual(storyIds2);
  });
});

describe("Hacker News API - getTopStories", () => {
  it("should return an array of story IDs", async () => {
    const storyIds = await getTopStories();
    expect(Array.isArray(storyIds)).toBeTruthy();
    expect(storyIds.length).toBeGreaterThan(0);
  });
});

describe("Hacker News API - getStoryDetails", () => {
  it("should return a story object", async () => {
    const storyIds = await getTopStories();
    const story = await getStoryDetails(storyIds[0]);
    expect(story).toHaveProperty("id");
    expect(story).toHaveProperty("title");
    expect(story).toHaveProperty("url");
    expect(story).toHaveProperty("score");
    expect(story).toHaveProperty("time");
    expect(story).toHaveProperty("by");
  });

  it("should return the same story object if called again", async () => {
    const storyIds = await getTopStories();
    const story1 = await getStoryDetails(storyIds[0]);
    const story2 = await getStoryDetails(storyIds[0]);
    expect(story1).toEqual(story2);
  });
});
