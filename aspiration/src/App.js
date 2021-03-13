import React, { useEffect, useState } from "react";
import Jumbotron from "./Components/Jumbotron";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Topic from "./Components/Topic";
import Term from "./Components/Term";
import { Col, Row, Container } from "./Components/Grid";
import { List } from "./Components/List";
import axios from "axios";
import * as Constants from "./constants";

function App() {

  const[data, setData] = useState( { topic: []} );

  useEffect( () => {
    const fetchData = async () => {
        //Call GraphQL API 
        const queryResult = await axios.post (
          Constants.GraphQL_API, {
            query: Constants.GET_TOPICS_QUERY
          },{
            headers: {
              Authorization: "API_KEY"
            }
          }
        );
      
        //Update component State
        const result = queryResult.data.data;
        setData({ topic: result.topic })
    };
   
    fetchData();
  })
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">
              <strong>(React)GitHub Topic Explorer</strong>
            </h1>
            <h2 className="text-center"> Search for or Explore Terms of Interest</h2>
          </Jumbotron>
        </Col>
        </Row>
        <Row>
        <Col size="md-6 sm-12">
          <Card title="Topic Search">
            <Form
           handleInputChange={this.handleInputChange}
           handleFormSubmit={this.handleFormSubmit}
           query ={this.state.query}
             >
              <Term/>
             </Form>
          </Card>
        </Col>
        <Col size="md-6 sm-12">
          <Card title="React Related Topics">
            <List>
            {data.topic.map(item => (
              <Topic key={item.name} stargazerCount={item.stargazerCount} relatedTopics={item.relatedTopics.name} relatedstargazerCount={item.relatedTopics.stargazerCount}/>
              ))} 
            </List>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
