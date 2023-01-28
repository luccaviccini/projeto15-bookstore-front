import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import TopBar from "./app-bars/TopBar"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showError, setShowError] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    email: ""
  })
  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    const promise = axios.post('/sign-up', {
      name,
      email,
      password,
      confirmPassword
    })

    promise.then(response => {
      navigate("/sign-in")
    })
    promise.catch(err => {
      checkError(err.response.data)
    })
  }

  function checkError(errors){
    console.log("vvv", errors)
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
        <TopBar title="Get Started" link="/" />
        <Title>
          BookStore
        </Title>
        <Form onSubmit={signUp}>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div>{showError.name ? <Error>{showError.name}</Error>: <></> }</div>
          <Label>Email Address</Label>
          <Input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div>{showError.email ? <Error>{showError.email}</Error>: <></> }</div>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div>{showError.password ? <Error>{showError.password}</Error>: <></> }</div>
          <Label>Confirm your Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <div>{showError.password ? <Error>{showError.password}</Error>: <></> }</div>
          <Button type="submit">SignUp</Button>
          <Text>
            <StyledLink to="/sign-in">Already have an account? Login</StyledLink>
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
`

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
  background: #E1E1E1;
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
  margin-top: 25px;
  gap: 10px;
  width: 318px;
  height: 42px;
  background: #000000;
  border: 1px solid #545454;
  border-radius: 10px;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #FBFBFB;
`;

const Text = styled.p`
  font-weight: 400;
  margin-top: 20px;
  font-size: 14px;
  a{
    color: #606060;
  }
`
const Label = styled.p`
  width: 100%;
  height: 22px;
  margin-left: 35px;
  margin-top: 18px;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`

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

export default SignUp