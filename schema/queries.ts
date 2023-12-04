import {GraphQLList, GraphQLObjectType} from 'graphql';
import { StoryType } from './types';
import { fetchTopStoriesIfNeeded, getStoryDetails } from '../src/services/hackerNewsAPI';

const recent = {
  type: new GraphQLList(StoryType),
  resolve: async () => {
    const topStoryIds = await fetchTopStoriesIfNeeded();
    const stories = await Promise.all(topStoryIds.slice(0, 10).map(getStoryDetails));
    return stories.sort((a, b) => b.time - a.time);
  }
};

const popular = {
  type: new GraphQLList(StoryType),
  resolve: async () => {
    const topStoryIds = await fetchTopStoriesIfNeeded();
    const stories = await Promise.all(topStoryIds.slice(0, 10).map(getStoryDetails));
    return stories.sort((a, b) => b.score - a.score);
  }
};


let lastHighlightUpdateTime = 0;
let currentHighlightStory: null = null;

const highlight = {
  type: StoryType,
  resolve: async () => {
    const currentTime = Date.now();
    if (!currentHighlightStory || currentTime - lastHighlightUpdateTime > 3600000) {
      const topStoryIds = await fetchTopStoriesIfNeeded();
      const randomIndex = Math.floor(Math.random() * topStoryIds.length);
      currentHighlightStory = await getStoryDetails(topStoryIds[randomIndex]);
      lastHighlightUpdateTime = currentTime;
    }
    return currentHighlightStory;
  }
};

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    recent,
    popular,
    highlight
  }
});
