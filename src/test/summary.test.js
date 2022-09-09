/**
 * @jest-environment jsdom
 */

import React from "react";
import "./matchMedia";
import Summary from "../Components/Summary";
import data from "./data.json";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("test Summary mobile", () => {
  act(() => {
    render(
      <Summary data={data} isMobile={true} isShowDollar={false} />,
      container
    );
  });
  expect(
    container.ownerDocument.getElementsByClassName("confirmations")[0]
      .parentNode.childNodes.length
  ).toBe(2);
});

it("test Summary isShowDollar", () => {
  act(() => {
    render(
      <Summary data={data} isMobile={true} isShowDollar={true} />,
      container
    );
  });
  expect(
    container.ownerDocument
      .getElementsByClassName("feereward")[0]
      .textContent.indexOf("$")
  ).not.toBe(-1);
});
