import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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
      console.error(err.response)
    })
  }
  return (
    <>
      <Container>
        <Title>
          BookStore
        </Title>
        <Form onSubmit={signUp}>
          <Input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">SignUp</Button>
          <Text>
            <Link to="/sign-in">Already have an account? Login</Link>
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
  left: 40px;
  top: 325px;
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
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 140px;
  gap: 10px;
  width: 318px;
  height: 42px;
  left: 56px;
  top: 590px;
  background: #000000;
  border: 1px solid #545454;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #FBFBFB;
`;

const Text = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  a{
    color: #fff;
  }
`;

export default SignUp