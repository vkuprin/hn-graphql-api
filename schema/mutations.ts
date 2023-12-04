import { GraphQLObjectType, GraphQLBoolean } from "graphql";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    refresh: {
      type: GraphQLBoolean,
      resolve: () => {
        /* ... */
      },
    },
    // Add other mutations as needed
  },
});
