import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import mobile from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px", justifyContent: "start" })};
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.span`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px", padding: "5px" })}
`;

const Productlist = styled.div`
margin-left: 20px;
font-size: 1.2rem;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.div`
  border: none;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.h1`
  font-weight: bold;
  text-align: center;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size: 1.2rem;
  cursor: pointer;
  margin: 0 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/"> SUMER. </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
          <Link to="/ProductList">Product List</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Register"> Register </Link>
          </MenuItem>
          <MenuItem>  <Link to="/Login"> Sign In </Link></MenuItem>
          <MenuItem>
            <Link to="/Cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
