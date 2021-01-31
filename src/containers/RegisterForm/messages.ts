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
  repeatedPasswordPlaceholder: {
    id: `${scope}.repeatedPasswordPlaceholder`,
    defaultMessage: "Retype password",
  },
  repeatedPasswordLabel: {
    id: `${scope}.repeatedPasswordLabel`,
    defaultMessage: "Confirm password",
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
  passwordLength: {
    id: `${scope}.passwordLength`,
    defaultMessage: "Password must be at least {length} characters long",
  },
  oneNumberOrSymbol: {
    id: `${scope}.oneNumberOrSymbol`,
    defaultMessage: "Password must include at least one number and one symbol",
  },
  lowerAndUpperCharacter: {
    id: `${scope}.lowerAndUpperCharacter`,
    defaultMessage:
      "Password must include both lower and upper case characters",
  },
  passwordsDoNotMatchError: {
    id: `${scope}.passwordsDoNotMatchError`,
    defaultMessage: "Passwords must match",
  },
  passwordConfirmEmpty: {
    id: `${scope}.passwordConfirmEmpty`,
    defaultMessage: "Password confirm is required",
  },
  termsAndConditionError: {
    id: `${scope}.termsAndConditionError`,
    defaultMessage: "Accepting terms and conditions is required",
  },
  acceptTerms: {
    id: `${scope}.acceptTerms`,
    defaultMessage: "I agree to the terms of service.",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Create an account",
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Already have an account?",
  },
});
