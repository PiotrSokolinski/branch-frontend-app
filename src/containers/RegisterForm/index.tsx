import React from "react";
import * as Yup from "yup";
import { useFormik, FormikHelpers } from "formik";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Form,
  StyledButton,
  StyledButtonLink,
  Wrapper,
  StyledError,
  Header,
} from "./styled";
import Input from "../../components/Input";
import FormField from "../../components/FormField";
import messages from "./messages";
import { selectLoading, selectError, register } from "../../redux/register";

type RegisterFormProps = {};

type Inputs = {
  email: string;
  password: string;
  repeatedPassword: string;
};

const initialValues: Inputs = {
  email: "",
  password: "",
  repeatedPassword: "",
};

const passwordLength = 8;

const validationSchema = (formatMessage: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(formatMessage(messages.emailInvalidError))
      .required(formatMessage(messages.emailEmptyError)),
    password: Yup.string()
      .required(formatMessage(messages.passwordEmptyError))
      .min(
        passwordLength,
        formatMessage(messages.passwordLength, { length: passwordLength })
      )
      .test(
        "password",
        formatMessage(messages.oneNumberOrSymbol),
        (value: any) =>
          value && new RegExp("(?=.*[0-9])(?=.[!@#$%^&])").test(value)
      )
      .test(
        "password",
        formatMessage(messages.lowerAndUpperCharacter),
        (value: any) =>
          value && new RegExp("(?=.*[a-z])(?=.*[A-Z])").test(value)
      ),
    repeatedPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        formatMessage(messages.passwordsDoNotMatchError)
      )
      .required(formatMessage(messages.passwordConfirmEmpty)),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      formatMessage(messages.termsAndConditionError)
    ),
  });

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const dispatch: any = useDispatch();
  const loading: boolean = useSelector(selectLoading);
  const error: string = useSelector(selectError);
  const { formatMessage } = useIntl();
  const onSubmit = async (
    { email, password }: Inputs,
    { setSubmitting }: FormikHelpers<Inputs>
  ) => {
    dispatch(register(email, password));
    setSubmitting(false);
  };

  const schema: Yup.ObjectSchema = validationSchema(formatMessage);
  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>Register your account</Header>
        <Wrapper>
          <FormField
            error={touched.email && errors.email}
            label={formatMessage(messages.emailLabel)}
            name="email"
          >
            <Input
              id="email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={formatMessage(messages.emailPlaceholder)}
            />
          </FormField>
        </Wrapper>
        <Wrapper>
          <FormField
            error={touched.password && errors.password}
            label={formatMessage(messages.passwordLabel)}
            name="password"
          >
            <Input
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={formatMessage(messages.passwordPlaceholder)}
            />
          </FormField>
        </Wrapper>
        <Wrapper>
          <FormField
            error={touched.repeatedPassword && errors.repeatedPassword}
            label={formatMessage(messages.repeatedPasswordLabel)}
            name="repeatedPassword"
          >
            <Input
              id="repeatedPassword"
              type="password"
              name="repeatedPassword"
              value={values.repeatedPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={formatMessage(messages.repeatedPasswordPlaceholder)}
            />
          </FormField>
        </Wrapper>
        <StyledButton type="submit" loading={loading} disabled={loading}>
          <FormattedMessage {...messages.signUp} />
        </StyledButton>
        <StyledButtonLink to="/login">
          <FormattedMessage {...messages.signIn} />
        </StyledButtonLink>
        {error && <StyledError>{error}</StyledError>}
      </Form>
    </Container>
  );
};

export default RegisterForm;
