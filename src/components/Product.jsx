import styled from "styled-components";
import { ShoppingCartOutlined,  SearchOutlined,  FavoriteBorderOutlined} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition:all ease 0.5s;
  cursor:pointer;
`;
const Container = styled.div`
  flex: 1;
  height: 350px;
  min-width: 250px;
  object-fit: cover;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b9cfd37e;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  width: 100%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all ease 0.5s;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
