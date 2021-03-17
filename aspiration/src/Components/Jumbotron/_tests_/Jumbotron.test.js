import * as React from "react";
import Jumbotron from "../index";
import renderer from "react-test-renderer";

describe("Jumbotron", () => {
  test("Should match the snapshot", () => {
    const tree = renderer.create(<Jumbotron />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
