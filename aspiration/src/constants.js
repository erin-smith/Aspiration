export const GraphQL_API = "https://api.github.com/graphql";

export const GET_TOPICS_QUERY = `
query {
  topic(name:"react") {
    name,
    stargazerCount,
    relatedTopics (first:10){
      name,
      stargazerCount
      }
    }
  }`;
