import * as React from "react";
import {List, ListItem} from "../index";
import renderer from "react-test-renderer";

describe("List", () => {
  test("ListItem should match the snapshot", () => {
    const tree = renderer.create(<ListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("List should match the snapshot", () => {
    const tree = renderer.create(<List/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("List with ListItems should match the snapshot", () => {
    const tree = renderer.create(<List><ListItem/><ListItem/></List>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
