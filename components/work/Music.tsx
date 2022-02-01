import React, { useEffect } from "react";
import SvgRenderer from "../../shared/component/svgRenderer";

const Music = () => {
	useEffect(() => {
		const player = document.getElementById('audio')
	})
	return (
		<div className='relative bg-darkBlue h-[150vh] p-20'>
			<div className='relative w-10/12 mx-auto font-[SF_Pro_Display_Regular] text-white font-bold text-4xl'>
				<div className='w-max mx-auto'>music</div>
				<SvgRenderer filePath='assets/vectors/music.svg' />

				<audio id="audioplayer"className='w-10/12 mx-auto'>
					<source
						src='assets/audio/master.mp3'
						type='audio/mp3'
						className='mx-auto'
					/>
				</audio>
			</div>
			<div className='bg-black w-60 h-60 rounded-full drop-shadow-3xl flex items-center justify-center mx-auto my-20'>
					<div className='relative bg-[#B6A49C] w-24 h-34 rounded-full self-center drop-shadow-3xl'><SvgRenderer filePath="assets/vectors/play.svg"/></div>
			</div>
		</div>
	);
};

export default Music;
