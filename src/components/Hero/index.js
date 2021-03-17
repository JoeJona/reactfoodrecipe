import React, {useState} from 'react';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import { HeroContainer, HeroContent, HeroBtn,HeroItems,HeroH1,HeroP } from './HeroElement';


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ready</HeroH1>
                    <HeroP>Ready in 60 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
