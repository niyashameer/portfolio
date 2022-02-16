import React from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const Work = () => {
	return (
		<div className='relative w-full h-screen px-14 font-lightBlack flex flex-row justify-center'>
			{/* <div className='absolute left-0 top-0 w-96'>
				<SvgRenderer filePath={"assets/vectors/worksvg.svg"} />
			</div> */}
			<div className='font-bold text-4xl flex items-center h-full text-center w-1/4'>
				<div className="w-full">work experience</div>
			</div>
			<div className="flex items-center h-full">
			<div className='mx-40 my-4 flex-col flex float-right'>
				<div className='flex flex-col h-40'>
					<hr className='border bg-lightText' />
					<div className='mt-4 mx-4 font-bold grid grid-cols-10'>
						<span className='col-span-2 text-lightGreen text-2xl'>01</span>
						<span className='text-3xl col-span-4 mt-4'>Heiphen</span>
					</div>
					<div className='mx-4 grid grid-cols-10'>
						<span className='col-span-2'></span>
						<span className='col-span-3'>Frontend Developer</span>&nbsp;
						<span className='text-lightGreen text-xs col-span-2 mt-1.5 font-semibold'>
							09/21 - present
						</span>
					</div>
				</div>
				<div className='flex flex-col h-40'>
					<hr className='border bg-lightText' />
					<div className='mt-4 mx-4 font-bold grid grid-cols-10 items-center'>
						<span className='col-span-2 text-lightGreen text-2xl'>02</span>
						<span className='text-3xl col-span-6 mt-4'>Tech Analogy</span>
					</div>
					<div className='mx-4 grid grid-cols-10 items-center'>
						<span className='col-span-2'></span>
						<span className='col-span-3'>Frontend Developer</span>&nbsp;
						<span className='text-lightGreen text-xs col-span-2 mt-1.5 font-semibold'>
							04/21 - present
						</span>
					</div>
				</div>
				<div className='flex flex-col h-40'>
					<hr className='border bg-lightText' />
					<div className='mt-4 mx-4 font-bold grid grid-cols-10'>
						<span className='col-span-2 text-lightGreen text-2xl'>03</span>
						<span className='text-3xl col-span-6 mt-4'>Docsup</span>
					</div>
					<div className='mx-4 grid grid-cols-10 items-center'>
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
