import React, { createContext } from "react";
import Navbar from "./navbar";
import InfoHero from "./info-hero";
import { useColorModeValue as mode } from "@chakra-ui/react";
export const LandingContext = createContext();
import { Global } from "@emotion/react";
const Landing = () => {
    const bg = mode("white", "gray.900");
    return (
        <LandingContext.Provider value={{ bg }}>
            <Global styles={{ body: { background: bg } }} />
            <Navbar />
            <InfoHero
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                label=""
            />
        </LandingContext.Provider>
    );
};

export default Landing;
