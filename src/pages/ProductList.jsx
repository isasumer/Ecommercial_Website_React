import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
display:flex;
flex-direction:column;
`;
const Title = styled.h1`
display:flex;
margin:10px 20px;
align-items:center;

`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`;
const Filter = styled.div`
margin:0 10px;
display:flex;
justify-content: flex-start;
align-items:center;
`;
const FilterText = styled.h3`
margin:0 10px;

`;
const Select = styled.select`
padding:0 10px;
margin:0 10px;
`;
const Option = styled.option`

`;


const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title> DRESS
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
