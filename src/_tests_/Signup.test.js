import { expect, test } from "@jest/globals";
import {render} from '@testing-library/react';
import { StaticRouter } from "react-router-dom";
import Signup from "../components/Signup";

test("displays the signup page", async () => {
  const signup = render(
    <StaticRouter>
      <Signup />
    </StaticRouter>
  );
  
  const signupButton = await signup.findByTestId(signup-button);
  
  expect(signupButton).toHaveDisplayValue("Sign Up");
});