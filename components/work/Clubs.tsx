import React from "react";
import Club from "../../shared/component/Club";
import SvgRenderer from "../../shared/component/svgRenderer";

const Clubs = () => {
	return (
		<div className='w-full h-screen px-14 py-14 text-lightBlack'>
			<div className='w-[20%] text-lightBlack font-bold text-4xl font-lightBlack flex flex-row items-center justify-between'>
				<span className='w-[30%]'>clubs</span>
				<span className='w-[65%]'>
					<hr className='border-2 border-darkRed bg-darkRed mt-2' />
				</span>
			</div>
			<div className='w-[70%] h-full py-8 px-8 grid grid-rows-2 grid-cols-2 gap-x-20 justify-between mx-auto'>
                <Club filePath="assets/vectors/alexa-svg.svg" text1="alexa" text2="devel" text3="opers" text4="srm" />
                <Club filePath="assets/vectors/geny-svg.svg" text1="team" text2="gen" text3="y" text4="srm" />
                <Club filePath="assets/vectors/srmmun.svg" text1="srm" text2="mun" text3="soci" text4="ety" />
                {/* <Club filePath="assets/vectors/alexa-svg.svg" text1="srm" text2="liter" text3="ary" text4="soc"/> */}
			</div>
		</div>
	);
};
export default Clubs;
