import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  PageContainer,
  FormContainer,
  FormTitle,
  FormItem,
  Label,
  Input,
  ActionContainer,
  Button,
  UtilsContainer,
  RedirectLink,
  ErrorContainer,
  ErrorItem,
} from "./style";

import { clientLogIn } from "../../modules/actions";
import History from "../../utils/History";

const Login = (props) => {
  const { clientLogIn, token, clientDetails } = props;

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState([]);

  useEffect(() => {
    if (token) {
      clientLogIn(token.username, token.password);
    }
    if (clientDetails) {
      History.push("/set");
    }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmitButtonClick = () => {
    if (!(username && password)) {
      setError(error.concat(["Incomplete field values."]));
    } else {
      setError([]);
      clientLogIn(username, password);
    }
  };

  const onCancelButtonClick = () => {
    setUsername("");
    setPassword("");
    setError([]);
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <FormTitle>LOGIN</FormTitle>
        <FormItem>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormItem>
        <ActionContainer>
          <Button primary onClick={onSubmitButtonClick}>
            Submit
          </Button>
          <Button onClick={onCancelButtonClick}>Reset</Button>
        </ActionContainer>
        {error.length > 0 ? (
          <ErrorContainer>
            {Array.from(new Set(error)).map((d, i) => (
              <ErrorItem key={i}>{d}</ErrorItem>
            ))}
          </ErrorContainer>
        ) : null}
        <UtilsContainer>
          <h4>No account yet?</h4>
          <RedirectLink to="/signup" color="red">
            Create an account.
          </RedirectLink>
        </UtilsContainer>
      </FormContainer>
    </PageContainer>
  );
};

const mapStateToProps = ({ clientLogDetails, clientDetails }) => {
  return {
    token: clientLogDetails,
    clientDetails,
  };
};

export default connect(mapStateToProps, { clientLogIn })(Login);
