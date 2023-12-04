import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export const StoryType = new GraphQLObjectType({
  name: "Story",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    score: { type: GraphQLInt },
    time: { type: GraphQLInt },
  },
});
