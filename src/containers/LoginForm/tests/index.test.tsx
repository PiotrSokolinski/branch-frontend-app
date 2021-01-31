/**
 *
 * Tests for Login
 *
 */

import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";

import store from "../../../utils/store";

import LoginForm from "../index";

describe("<Button />", () => {
  it("Expect to not log errors in console", () => {
    const spy: jest.SpyInstance<
      void,
      [message?: any, ...optionalParams: any[]]
    > = jest.spyOn(global.console, "error");
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render primary button and match the snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("Should invoke onClick callback on the Button", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
    const emailInput: HTMLElement = getByPlaceholderText("Address e-mail");
    const passwordInput: HTMLElement = getByPlaceholderText("Password");
    const button: HTMLElement = getByText("Sign in");

    fireEvent.change(emailInput, { value: "email@gmail.com" });
    fireEvent.change(passwordInput, { value: "Password1!" });
    fireEvent.click(button);

    expect(store.getState().login.loading).toEqual(true);
  });
});
