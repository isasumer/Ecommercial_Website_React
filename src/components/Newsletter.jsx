import { Send } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "50px"})};
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px", textAlign: "center"})};
`;
const InputContainer = styled.div`
width:50%;
height:40px;
display:flex;
justify-content: center;
align-items:center;
border:1px solid lightgray;
${mobile({ width:"70%"})};
`;
const Input = styled.input`
flex:8;
border:none;
height:100%;
padding-left: 20px;
`;
const Button = styled.button`
flex:1;
border:none;
height:100%;
background-color:teal ;
color:white;
cursor:pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Lorem ipsum dolor sit amet.</Desc>
      <InputContainer>
        <Input placeholder="Enter your email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
