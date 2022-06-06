import React from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const Work = () => {
	return (
		<div className='relative w-full h-screen py-14 px-14 md:px-20 font-lightBlack flex lg:flex-row flex-col justify-center items-center'>
			{/* <div className='absolute left-0 top-0 w-96'>
				<SvgRenderer filePath={"assets/vectors/worksvg.svg"} />
			</div> */}
			<div className='font-bold text-4xl flex items-center lg:h-full md:text-center text-left lg:w-[40%] w-full h-72' >
				<div className='w-full' data-kimochii-pointer='expanded'>work experience</div>
			</div>
			<div className='flex w-full md:items-center md:justify-center lg:h-full xl:w-3/4 md:w-[60%]'>
				<div className='md:mx-40 my-4 flex-col flex float-right'>
					<div className='w-[90%] sm:w-[500px] flex flex-col h-40'>
						<hr className='sm:block hidden border bg-lightText' />
						<div className='mt-4 mx-4 font-bold sm:grid grid-cols-10 sm:items-center'>
							<span className='sm:block hidden col-span-2 text-lightGreen text-2xl'>
								01
							</span>
							<span className='text-3xl col-span-4 mt-4'>Heiphen</span>
						</div>
						<div className='mx-4 flex flex-col sm:grid grid-cols-10 sm:items-center'>
							<span className='sm:col-span-2'></span>
							<span className='sm:col-span-3'>Frontend Developer</span>&nbsp;
							<span className='text-lightGreen text-xs sm:col-span-2 mt-1.5 font-semibold'>
								09/21 - present
							</span>
						</div>
					</div>
					<div className='w-[90%] sm:w-[500px] flex flex-col sm:h-40 h-52'>
						<hr className='sm:block hidden border bg-lightText' />
						<div className='mt-4 mx-4 font-bold sm:grid grid-cols-10 sm:items-center'>
							<span className='sm:block hidden col-span-2 text-lightGreen text-2xl'>
								02
							</span>
							<span className='text-3xl col-span-6 mt-4'>Tech Analogy</span>
						</div>
						<div className='mx-4 flex flex-col sm:grid grid-cols-10 sm:items-center'>
							<span className='col-span-2'></span>
							<span className='col-span-3'>Frontend Developer</span>&nbsp;
							<span className='text-lightGreen text-xs sm:col-span-2 mt-1.5 font-semibold'>
								04/21 - present
							</span>
						</div>
					</div>
					<div className='w-[90%] sm:w-[500px] flex flex-col h-40'>
						<hr className='sm:block hidden border bg-lightText' />
						<div className='mt-4 mx-4 font-bold sm:grid grid-cols-10 sm:items-center'>
							<span className='sm:block hidden col-span-2 text-lightGreen text-2xl'>
								03
							</span>
							<span className='text-3xl col-span-6 mt-4'>Docsup</span>
						</div>
						<div className='mx-4 flex flex-col sm:grid grid-cols-10 sm:items-center'>
							<span className='col-span-2'></span>
							<span className='col-span-3'>Frontend Developer</span>&nbsp;
							<span className='text-lightGreen text-xs col-span-2 mt-1.5 font-semibold'>
								02/22 - present
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
