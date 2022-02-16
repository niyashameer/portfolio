import React from "react";
import Music from "../components/work/Music";
import Clubs from "../components/work/Clubs";
import Projects from "../components/work/Projects";
import WorkExp from "../components/work/Work";

const Work = () => {
    return <div className="text-lightBlack font-[SF_Pro_Display_Regular] w-full overflow-hidden">
        <Projects/>
        <WorkExp />
        <Music />
        <Clubs />
    </div>;
};

export default Work;
