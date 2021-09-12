import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
flex:1;
margin:5px;
height: 70vh;
position:relative;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({ height:"80vh" })};


`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;
width:100%;
height:100%;
`;
const Title = styled.h1`
color:white;
margin:20px 0;
`;
const Button = styled.button`
border:none;
border-radius:10px;
padding:15px;
background-color:white;
color:grey;
cursor:pointer;
font-weight: 600;
`;

const CategoryItem = ({item}) => {
    return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
    )
};

export default CategoryItem;
