import React from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const Music = () => {
	return (
		<div className='relative bg-darkBlue h-screen p-20'>
			<div className='w-10/12 mx-auto font-[SF_Pro_Display_Regular] text-white font-bold text-4xl'>
				<div className='w-max mx-auto'>music</div>
				<SvgRenderer filePath='assets/vectors/music.svg' />

				<audio controls className='w-10/12 mx-auto'>
					<source
						src='assets/audio/master.mp3'
						type='audio/mp3'
						className='mx-auto'
					/>
				</audio>
			</div>
			<div className='absolute -bottom-0 -left-20 bg-black w-40 h-40 rounded-full flex items-center justify-center'>
				<div className='relative bg-gray w-24 h-24 rounded-full self-center'></div>
			</div>
		</div>
	);
};

export default Music