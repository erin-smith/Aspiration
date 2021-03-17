import * as React from "react";
import {Col, Row, Container} from "../index";
import renderer from "react-test-renderer";

describe("Grid", () => {
  test("Col should match the snapshot", () => {
    const tree = renderer.create(<Col size="md-12"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Row should match the snapshot", () => {
    const tree = renderer.create(<Row/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Container should match the snapshot", () => {
    const tree = renderer.create(<Container/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
