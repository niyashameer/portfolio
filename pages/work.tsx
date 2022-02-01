import React from "react";
import Music from "../components/work/Music";
import Clubs from "../components/work/Clubs";
import Projects from "../components/work/Projects";
import WorkExp from "../components/work/Work";

const Work = () => {
    return <div>
        <Clubs />
        <WorkExp />
        <Music />
        <Projects/>
    </div>;
};

export default Work;
