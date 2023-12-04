import { fetchTopStoriesIfNeeded } from "../../services/hackerNewsAPI";

describe("Hacker News API - fetchTopStoriesIfNeeded", () => {
  it("should return an array of story IDs", async () => {
    const storyIds = await fetchTopStoriesIfNeeded();
    expect(Array.isArray(storyIds)).toBeTruthy();
    expect(storyIds.length).toBeGreaterThan(0);
  });
});
