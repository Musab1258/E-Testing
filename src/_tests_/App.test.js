import { expect, test } from "@jest/globals";
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from "../App"

test("displays the get started button", async () => {
  render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
  );

  expect(screen.getByTestId("get-started-button")).toBeInTheDocument();
});