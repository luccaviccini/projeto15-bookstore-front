import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import UserContext from "./context/UserContext"

function SignUp() {
  const { setToken, setUserId, setSession } = useContext(UserContext)
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const navigate = useNavigate();

  function signIn(event) {
    event.preventDefault();
    const promise = axios.post('/sign-in', {
      email: emailValue,
      password: passwordValue,
    })

    promise.then(response => {
      const { token, userId, _id } = response.data
      setToken(token);
      setUserId(userId)
      setSession(_id)
      console.log("token", token)
      console.log("userId", userId)
      console.log("session id", _id)
      //navigate('/home');
    })
    promise.catch(err => {
      console.error(err.response)
    })
  }
  return (
    <>
      <Container>
        <Title>
          Login
        </Title>
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
          <Label>Password</Label>
          <Input
            data-test="password"
            type="password"
            placeholder="Password"
            required
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
          />
          <Button data-test="sign-in-submit" type="submit">Login</Button>
          <Text>
            <Link to="/sign-up">Don't have an account? Register Here</Link>
          </Text>
        </Form>
      </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #EFEFEF;
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
  color: #FBFBFB;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  a{
    color: #fff;
  }
`

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
`
  ;

export default SignUp