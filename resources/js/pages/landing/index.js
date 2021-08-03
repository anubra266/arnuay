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
                image="https://image.freepik.com/free-photo/happy-african-american-businessman-suit-looking-laptop-excited-by-good-news-online-black-man-winner-sitting-office-desk-achieved-goal-raising-hands-celebrating-business-success-win-result_231208-673.jpg"
                label=""
            />
        </LandingContext.Provider>
    );
};

export default Landing;
