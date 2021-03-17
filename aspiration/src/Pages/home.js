import React, {useState, useEffect} from "react";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import Form from "../Components/Form";
import TableResults from "../Components/TableResults";
import { Col, Row, Container } from "../Components/Grid";
import { List } from "../Components/List";
import API from "../utils/API";

function Home () {
  const [topic, setTopic] = useState({name:"", stargazerCount:0, relatedTopics:[]}); // search results (json)
  const [error, setError] = useState("");

  useEffect(() => {
    doSearch("react");
  }, []);


  const handleTopicChanged = (e) => {
      console.log( "topic clicked:", e.target.id);
      doSearch(e.target.id);
  };

  const doSearch = (searchTerm) => {
    API.apolloSearch(searchTerm)
    .then((response) => {

      console.log("apollo response", response);
      if (response.data.topic === null){
        console.log("null");
        setTopic({name:"NOT FOUND", stargazerCount:0, relatedTopics:[]});
        return;
      }
      setTopic(response.data.topic);
    })
  }

  return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React)GitHub Topic Explorer</strong>
              </h1>
              <h2 className="text-center">
                Search for or Explore Terms of Interest
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <Card title="Topic Search">
              <Form 
                call={doSearch}
              />
            </Card>
          </Col>
          <Col size="md-6 sm-12">
            <Card title="Search Results">
              <List>
                <TableResults name={topic.name}
                        relatedTopics={topic.relatedTopics}
                        stargazerCount={topic.stargazerCount}
                        itemClicked={handleTopicChanged}
                        />
              </List>
            </Card>
          </Col>
        </Row>
      </Container>
    );   
};

export default Home;
