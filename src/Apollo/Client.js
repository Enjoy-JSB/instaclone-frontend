import { defaults, resolvers } from "./LocalState";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default new ApolloClient({
  clientState: {
    defaults,
    resolvers,
  },
  cache: new InMemoryCache(),
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://instaclone-backend-js.herokuapp.com/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
