import axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY;

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


 export const oauth = {Authorization: 'bearer ' + API_KEY}

 export default {
  pleaseCallThis: function(searchTerm) {
    console.log("searching for ", searchTerm);
    const graphql = JSON.stringify({query: GET_TOPICS_QUERY.replace("react",searchTerm), variables: {} });
    console.log("graphqpl: ", graphql)
   return axios.post(GraphQL_API, graphql, {headers:oauth})
   .then (res => {
      const topics = res.data.data.topic;
      console.log("here",topics);
      return topics;
    });
  }
 };
