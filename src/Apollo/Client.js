import { defaults, resolvers } from "./LocalState";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default new ApolloClient({
  clientState: {
    defaults,
    resolvers,
  },
  cache: new InMemoryCache(),
  uri: "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
