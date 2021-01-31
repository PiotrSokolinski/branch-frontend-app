import { defineMessages } from "react-intl";

export const scope = "app.containers.LoginForm";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Don’t miss your next favorite.",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Address e-mail",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "E-mail",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Password",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Password",
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign in",
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: "Don’t have an account yet?",
  },
  emailInvalidError: {
    id: `${scope}.emailInvalidError`,
    defaultMessage: "E-mail address is invalid",
  },
  emailEmptyError: {
    id: `${scope}.emailEmptyError`,
    defaultMessage: "E-mail address is required",
  },
  passwordEmptyError: {
    id: `${scope}.passwordEmptyError`,
    defaultMessage: "Password is required",
  },
});
