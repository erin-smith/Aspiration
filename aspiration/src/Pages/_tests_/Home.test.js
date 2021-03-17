import * as React from "react";
import HomePage from "../home";
import renderer from "react-test-renderer";

describe("Home page", () => {
  test("Should match the snapshot", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
