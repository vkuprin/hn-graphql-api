import { GraphQLObjectType, GraphQLBoolean } from "graphql";
import { fetchTopStoriesIfNeeded } from "../src/services/hackerNewsAPI";

const lastFetchTime = 0;

const refresh = {
  type: GraphQLBoolean,
  resolve: async () => {
    const currentTime = Date.now();
    if (currentTime - lastFetchTime < 300000) {
      // 5 minutes
      return false;
    }
    await fetchTopStoriesIfNeeded();
    return true;
  },
};

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    refresh: refresh,
  },
});
