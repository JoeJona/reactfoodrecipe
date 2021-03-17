import React from 'react'
import { ProductContainer, ProductHeading, ProductWrapper, ProductCard, ProductTitle, 
         ProductImage, ProductPrice, ProductDesc, ProductButton, ProductInfo } from './ProductElement'

const Products = ({heading, data}) => {
    return (
        <ProductContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((products, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductInfo>
                            <ProductImage src={products.img} alt={products.alt}/>
                            <ProductTitle>{products.name}</ProductTitle>
                            <ProductDesc>{products.desc}</ProductDesc>
                            <ProductPrice>{products.price}</ProductPrice>
                            <ProductButton>{products.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
