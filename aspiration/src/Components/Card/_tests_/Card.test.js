import * as React from "react";
import Card from "../index";
import renderer from "react-test-renderer";

describe("Card", () => {
  test("Should match the snapshot", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
