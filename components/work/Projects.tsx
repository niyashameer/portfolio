import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "../../shared/component/embla/EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const Projects = () => {
	const [emblaRef] = useEmblaCarousel();
	return (
		<div
			className='h-screen w-full relative overflow-hidden bg-lightGreen text-darkerBlue'
			ref={emblaRef}>
			<div className='w-max font-bold text-4xl pt-14 px-14' data-kimochii-pointer='expanded'>projects</div>
			<div className='flex justify-center items-center h-[80%]'>
				<div className='h-[60%] w-full flex items-center justify-center place-content-center'>
					{/* <div className='rounded-full w-56 h-56 bg-darkBlue absolute top-24 -right-24'></div> */}
					{/* <div className="grid grid-cols-3 gap-4 w-[70%] mx-auto py-20 items-center">
                <div className="rounded-lg border border-orange w-72 h-72"></div>
                <div className="rounded-lg border border-orange w-72 h-72"></div>
                <div className="rounded-lg border border-orange w-72 h-72"></div>
            </div> */}
					<EmblaCarousel slides={slides} />
				</div>
			</div>
		</div>
	);
};

export default Projects;
