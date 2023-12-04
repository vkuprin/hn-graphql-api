import { GraphQLList, GraphQLObjectType } from "graphql";
import { StoryType } from "./types";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    recent: {
      type: new GraphQLList(StoryType),
      resolve: () => {
        /* ... */
      },
    },
    // Define other queries similarly
  },
});
