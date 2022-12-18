import { GraphQLClient } from "graphql-request";

const url =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clb4t2miu0f3w01uic1hd7u36/master";

export const client: GraphQLClient = new GraphQLClient(url, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});
