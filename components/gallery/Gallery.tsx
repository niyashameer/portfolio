import React from "react";

const images = [
	{ id: 1, src: "assets/images/1.jpeg", alt: "gallery photo 1" },
	{ id: 2, src: "assets/images/2.jpeg", alt: "gallery photo 2" },
	{ id: 3, src: "assets/images/3.jpeg", alt: "gallery photo 3" },
	{ id: 4, src: "assets/images/4.jpeg", alt: "gallery photo 4" },
	{ id: 5, src: "assets/images/5.JPG", alt: "gallery photo 5" },
	{ id: 6, src: "assets/images/6.jpeg", alt: "gallery photo 6" },
    { id: 7, src: "assets/images/7.jpeg", alt: "gallery photo 6" },
];

const Gallery = () => {
	return (
		<div className='relative w-full min-h-screen py-14 px-8 md:px-20 font-[SF_Pro_Display_Regular]'>

			<div className='font-lightBlack text-xl sm:text-2xl w-full lg:w-[70%] font-bold mb-14'>
				A few moments from hikes, skis, and everywhere in between!
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[280px] sm:auto-rows-[320px] md:auto-rows-[360px] lg:auto-rows-[400px] gap-5 md:gap-8 md:mr-16'>
				{images.map((image, index) => (
					<div
						key={image.id}
						className={`relative overflow-hidden rounded-lg border border-lightGreen group ${
							index % 5 === 0 ? "col-span-2" : "col-span-1"
						}`}>
						<img
							src={image.src}
							alt={image.alt}
							className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
						/>
						<div className='absolute inset-0 bg-darkerBlue opacity-0 group-hover:opacity-20 transition-all duration-400'></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;