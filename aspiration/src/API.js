
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const API_KEY = process.env.REACT_APP_API_KEY;

export const GraphQL_API = "https://api.github.com/graphql";

const GET_TOPICS_QUERY = `
query{
  topic(name:"react") {
    name,
    stargazerCount,
    relatedTopics (first:10){
      name,
      stargazerCount
    }
  }
}`

  const client = new ApolloClient({
    uri: GraphQL_API,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_API_KEY}`,
    },
  });

 export const oauth = {Authorization: 'bearer ' + API_KEY}

 export default {
  apolloSearch: (topic) => {return client.query({
    query: gql`
      {
        topic(name:"${topic}") {
          name,
          stargazerCount,
          relatedTopics (first:10){
            name,
            stargazerCount
          }
        }
      }`,
  })}
 };
