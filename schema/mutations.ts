import { GraphQLObjectType, GraphQLBoolean } from "graphql";
import { fetchTopStoriesIfNeeded } from "../src/services/hackerNewsAPI";

let lastFetchTime = 0; // Reset this variable to force refetch

const refresh = {
  type: GraphQLBoolean,
  resolve: async () => {
    lastFetchTime = 0;
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
