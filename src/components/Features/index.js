import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElement'

const Feature = () => {
    return (
       <FeatureContainer>
           <h1>Pizza of the Day</h1>
           <p>Truffle alfredo sauce topped 24 carat Gold Dust</p>
           <FeatureButton>Order Now</FeatureButton>
       </FeatureContainer>
    )
}

export default Feature
