//import { expect, test } from "@jest/globals";
import {render, screen} from '@testing-library/react';
import { StaticRouter } from "react-router-dom";
import App from "../App"

test("displays the home page", async () => {
  render(
    <StaticRouter>
        <App />
    </StaticRouter>
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
});