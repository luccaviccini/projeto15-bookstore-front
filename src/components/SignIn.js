import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./context/UserContext";
import TopBar from "./app-bars/TopBar"

function SignUp() {
	const { setToken, setUserId, setSession } = useContext(UserContext);
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const navigate = useNavigate();
	const [showError, setShowError] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    email: ""
  })

	function signIn(event) {
		event.preventDefault();
		const promise = axios.post("/sign-in", {
			email: emailValue,
			password: passwordValue,
		});

		promise.then((response) => {
			const { token, userId, _id } = response.data;
			setToken(token);
			setUserId(userId);
			setSession(_id);
			navigate("/my-bag");
		});
    promise.catch(err => {
      checkError(err.response.data)
    })
	}
	function checkError(errors){
    const controlError = {email: 0, password: 0, confirmPassword: 0, name: 0}
    errors.forEach(error => {
      if(error.indexOf("name") !== -1){
        controlError.name += 1;
      }
      if(error.indexOf("email") !== -1){
        controlError.email += 1;
      }
      if(error.indexOf("password") !== -1){
        controlError.password += 1;
      }
      if(error.indexOf("confirmPassword") !== -1){
        controlError.confirmPassword += 1;
      }
    });
    setShowError({
      name: controlError.name > 0 ? "must be a valid name" : "",
      email: controlError.email > 0 ? "must be a valid email" : "",
      password: controlError.email > 0 ? "must be a valid password" : "",
    })
  }
  return (
    <>
      <Page>
        <TopBar title="Login" link="/sign-up" />
        <Title>
          Welcome Back
        </Title>
        <Text>Happy to see you again. Please Login Here</Text>
        <Form onSubmit={signIn}>
          <Label>Email Address</Label>
          <Input
            data-test="email"
            type="email"
            placeholder="E-mail"
            required
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
          />
					<div>{showError.email ? <Error>{showError.email}</Error>: <></> }</div>
          <Label>Password</Label>
          <Input
            data-test="password"
            type="password"
            placeholder="Password"
            required
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
          />
					<div>{showError.password ? <Error>{showError.password}</Error>: <></> }</div>
          <Button data-test="sign-in-submit" type="submit">Login</Button>
          <Text>
            <StyledLink to="/sign-up">Don't have an account? Register Here</StyledLink>
          </Text>
        </Form>
      </Page>
    </>
  )
}

const Title = styled.h1`
	width: 236px;
	height: 22px;
	left: 60px;
	top: 173px;
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #000000;
`;

const Page = styled.div`
	background-color: EFEFEF;
	box-sizing: border-box;
	padding: 25px 40px 0 40px;

	width: 100vw;
	height: 100vh;
	margin-bottom: 240px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;


const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 350px;
	height: 55px;
	background: #e1e1e1;
	border: 1px solid rgba(0, 0, 0, 0.7);
	border-radius: 10px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	&::placeholder {
		font-family: "Lexend Deca", sans-serif;
		font-weight: 400;
		font-size: 20px;
		color: #dbdbdb;
	}
`;

const Button = styled.button`
	display: flex;
	padding: 10px 140px;
	margin-top: 80px;
	gap: 10px;
	width: 318px;
	height: 42px;
	background: #000000;
	border: 1px solid #545454;
	border-radius: 10px;
	font-weight: 400;
	font-size: 15px;
	text-align: center;
	color: #fbfbfb;
`;

const Text = styled.p`
	font-weight: 400;
	margin-top: 20px;
	font-size: 14px;
	a {
		color: #606060;
	}
`;
const Label = styled.p`
	width: 100%;
	height: 22px;
	margin-left: 35px;
	margin-top: 30px;
	margin-bottom: 5px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: #000000;
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Error = styled.p`
  color: red;
  font-weight: bold;
`
export default SignUp;
