import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({  flexDirection: "column", marginLeft:"10px"})};

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display :"none"})};

`;
const Title = styled.h1``;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin: 10px 0px;
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const ContactItem = styled.div`
margin: 10px 0px;
display: flex;
justify-content: start;
align-items:center;

`;
const Payment = styled.img`
width:50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SUMER.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          quod sequi nesciunt modi debitis esse eos ut molestias.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="76b5c5">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 123, 4.Avenue New York, USA
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/> contact@compassfull.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
