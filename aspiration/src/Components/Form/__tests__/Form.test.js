import * as React from "react";
import Form from "../index";
import renderer from "react-test-renderer";

describe("Form", () => {
  test("Should match the snapshot", () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
