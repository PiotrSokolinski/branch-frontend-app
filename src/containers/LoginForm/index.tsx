import React from "react";
import * as Yup from "yup";
import { useFormik, FormikHelpers } from "formik";
import { FormattedMessage, useIntl } from "react-intl";

import {
  Form,
  Wrapper,
  Container,
  StyledButtonLink,
  StyledButton,
  Header,
} from "./styled";
import Input from "../../components/Input";
import messages from "./messages";
import FormField from "../../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import { login, selectError, selectLoading } from "../../redux/login";
import { StyledError } from "../RegisterForm/styled";

type LoginFormProps = {};

type Inputs = {
  email: string;
  password: string;
};

const initialValues: Inputs = {
  email: "",
  password: "",
};

const validationSchema = (formatMessage: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(formatMessage(messages.emailInvalidError))
      .required(formatMessage(messages.emailEmptyError)),
    password: Yup.string().required(formatMessage(messages.passwordEmptyError)),
  });

const LoginForm: React.FC<LoginFormProps> = () => {
  const dispatch: any = useDispatch();
  const loading: boolean = useSelector(selectLoading);
  const error: string = useSelector(selectError);
  const { formatMessage } = useIntl();
  const onSubmit = async (
    { email, password }: Inputs,
    { setSubmitting }: FormikHelpers<Inputs>
  ) => {
    dispatch(login(email, password));
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
        <Header>Sign in</Header>
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
        <StyledButton type="submit" loading={loading} disabled={loading}>
          <FormattedMessage {...messages.signIn} />
        </StyledButton>
        <StyledButtonLink to="/register">
          <FormattedMessage {...messages.register} />
        </StyledButtonLink>
        {error && <StyledError>{error}</StyledError>}
      </Form>
    </Container>
  );
};

export default LoginForm;
