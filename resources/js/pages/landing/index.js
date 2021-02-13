import React from "react";
import Navbar from "./navbar";
import InfoHero from "./info-hero";

const Landing = () => {
    return (
        <>
            <Navbar />
            <InfoHero
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                label=""
            />
        </>
    );
};

export default Landing;
