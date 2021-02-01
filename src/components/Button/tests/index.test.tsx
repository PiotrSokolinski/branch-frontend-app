/**
 *
 * Tests for Button
 *
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { IntlProvider } from "react-intl";

import Button from "../index";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

describe("<Button />", () => {
  it("Expect to not log errors in console", () => {
    const spy: jest.SpyInstance<
      void,
      [message?: any, ...optionalParams: any[]]
    > = jest.spyOn(global.console, "error");
    render(
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render primary button and match the snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("Should invoke onClick callback on the Button", () => {
    const buttonText: string = "Button";
    const onClick: () => void = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button disabled={false} onClick={onClick}>
          {buttonText}
        </Button>
      </ThemeProvider>
    );
    const button: HTMLElement = getByText(buttonText);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
