import styled from 'styled-components';

export const ProductContainer = styled.div`
width:100vw;
min-height:100vh;
padding:5rem calc((100vw-1300px) / 2);
background:#150f0f;
color:#fff;
`;

export const ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;
`;

export const ProductCard = styled.div`
margin:0 2rem;
width:300px;
line-height:2;
`;

export const ProductImage = styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow:5px 5px #fdc500;
`;

export const ProductHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align:center;
margin-botom:5rem;
`;

export const ProductTitle = styled.h2`
font-wieght:400;
font-size:1.5rem;
`;

export const ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;
`;

export const ProductDesc = styled.p`
margin-bottom:1rem;
`;

export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`;

export const ProductButton = styled.button`
font-size:1rem;
padding: 1rem 4rem;
border:none;
color:#fff;
background:#e31837;
transition: 0.2s ease-out;

&:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
}

`;