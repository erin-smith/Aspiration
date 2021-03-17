import * as React from "react";
import TableResults from "../index";
import renderer from "react-test-renderer";

describe("TableResults", () => {
  test("Should match the snapshot", () => {

    const testData = {name:"", stargazerCount:0, relatedTopics:[]};

    const tree = renderer.create(
        <TableResults 
            name={testData.name} 
            stargazerCount={testData.stargazerCount}
            relatedTopics={testData.relatedTopics}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
