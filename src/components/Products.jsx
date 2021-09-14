import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";

const Container = styled.div`
padding:20px;
display:grid;
grid-template-columns: auto auto auto auto;
flex-wrap:wrap;
@media (max-width: 1070px) {
    grid-template-columns: auto auto auto;
}
@media (max-width: 810px) {
    grid-template-columns: auto auto;
}
@media (max-width: 540px) {
    grid-template-columns: auto;
}
`;

const Products = () => {
    return (
        <Container> {
            popularProducts.map((item)=>(
                <Product item={item} key={item.id}/>
            ))}

        </Container>
    )
}

export default Products;