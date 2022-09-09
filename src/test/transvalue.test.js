/**
 * @jest-environment jsdom
 */

import React from "react";
import "./matchMedia";
import TransValue from "../Components/TransValue";
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

it("test TransValue value", () => {
  act(() => {
    render(<TransValue value="500000" />, container);
  });
  expect(container.textContent).toBe("0.00500000 BTC");
});

it("test TransValue change flag", () => {
  act(() => {
    render(<TransValue flag value="500000" />, container);
  });
  expect(container.textContent).toBe("$96.24");
});
