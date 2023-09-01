import {
  render,
  screen,
  within,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserInputForm from "./UserInputForm";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

test("form happy flow", async () => {
  render(<UserInputForm />);
  const age = screen.getByRole("spinbutton", {
    name: /recipient's age/i,
  });

  const interests = screen.getByRole("textbox", {
    name: /recipient's interests/i,
  });

  // const genderDropdown = screen.getByTestId("gender-select");
  // fireEvent.click(genderDropdown);
  // await new Promise((resolve, reject) => {
  //   setTimeout(resolve, 2000);
  // });
  // const m = await screen.findAllByTestId(/Male/);
  // const dropdownItem = await screen.findByTestId(/Male/);
  // const dropdownItem = await screen.findByText(/^Male/);

  user.click(screen.getByRole(screen.getByTestId("gender-select"), "button"));
  await waitFor(() => user.click(screen.getByText(/male/i)));
  // expect(screen.getByRole("")).toHaveTextContent(/male/i);
});
