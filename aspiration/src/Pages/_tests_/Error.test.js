import * as React from "react";
import ErrorPage from "../error";
import renderer from "react-test-renderer";

describe("Error page", () => {
  test("Should match the snapshot", () => {
    const tree = renderer.create(<ErrorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
