import React from "react";
import Club from "../../shared/component/Club";

const Clubs = () => {
	return (
		<div className='w-full h-screen px-14 py-14 text-lightText'>
			<div className='w-[40%] text-lightText font-bold text-4xl font-lightBlack flex flex-row items-center justify-between'>
				<span className='w-[70%]' data-kimochii-pointer='expanded'>student clubs</span>
				<span className='w-[100%]'>
					<hr className='border-2 border-lightGreen bg-lightGreen mt-2' />
				</span>
			</div>
			<div className="flex h-full items-center"><div className='w-[70%] h-[400px] py-8 px-8 grid grid-cols-2 gap-x-20 justify-between mx-auto'>
                <Club filePath="assets/vectors/alexa-svg.svg" text1="alexa" text2="devel" text3="opers" text4="srm" />
                <Club filePath="assets/vectors/srmmun.svg" text1="srm" text2="mun" text3="soc" text4="iety" />
			</div>
			</div>
		</div>
	);
};
export default Clubs;
