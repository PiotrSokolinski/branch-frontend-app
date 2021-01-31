/**
 *
 * Tests for Button
 *
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "../index";

describe("<Button />", () => {
  it("Expect to not log errors in console", () => {
    const spy: jest.SpyInstance<
      void,
      [message?: any, ...optionalParams: any[]]
    > = jest.spyOn(global.console, "error");
    render(<Button>Button</Button>);
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render primary button and match the snapshot", () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("Should invoke onClick callback on the Button", () => {
    const buttonText: string = "Button";
    const onClick: () => void = jest.fn();
    const { getByText } = render(
      <Button disabled={false} onClick={onClick}>
        {buttonText}
      </Button>
    );
    const button: HTMLElement = getByText(buttonText);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
