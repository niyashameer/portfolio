import React from "react";
import Social from "../shared/component/social";

const Contact = () => {
	return (
		<div className='h-screen px-14 py-14'>
			{/* <div className='text-3xl text-lightBlack font-bold mx-auto w-max py-14'>
				CONTACT ME
			</div> */}
			<div className='h-full w-full text-xl flex flex-col justify-between'>
				<div className='flex flex-col w-60 text-lightBlack'>
					<div className='font-semibold'>general</div>
					<div className=''>
                    <hr className='border-2 border-darkRed bg-darkRed mt-2' />
					</div>
					<div className='font-thin italic py-2'>niya.shameer@ymail.com</div>
                </div>
                <div className='flex flex-col w-60 text-lightBlack mx-auto'>
					<div className='font-semibold'>work</div>
					<div className=''>
                    <hr className='border-2 border-darkRed bg-darkRed mt-2' />
					</div>
					<div className='font-thin italic py-2'>nshameer22@gmail.com</div>
                </div>
                <div className='flex flex-col w-60 text-lightBlack float-right self-end'>
					<div className='font-semibold'>social</div>
					<div className=''>
                    <hr className='border-2 border-darkRed bg-darkRed mt-2' />
					</div>
					<div className='font-thin italic py-8'><Social /></div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
