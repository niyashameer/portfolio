import React from "react";

const Projects = () => {
	return (
		<div className='h-screen w-full relative px-14 py-14'>
			<div className='w-max text-lightBlack font-bold text-4xl font-lightBlack'>
				projects
            </div>
            <div className='rounded-full w-48 h-48 bg-darkBlue absolute top-24 -right-24'></div>
            <div className="grid grid-cols-3 gap-4 w-[70%] mx-auto py-20">
                <div className="rounded-lg border border-orange w-72 h-72"></div>
                <div className="rounded-lg border border-orange w-72 h-72"></div>
                <div className="rounded-lg border border-orange w-72 h-72"></div>
            </div>
		</div>
	);
};

export default Projects;
