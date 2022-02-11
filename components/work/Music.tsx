import React, { useEffect } from "react";
import SvgRenderer from "../../shared/component/svgRenderer";
import useAudio from "../../shared/customHooks/useAudio";
import VisibilitySensor from "react-visibility-sensor";
import Bars from "../../shared/component/Bars";
import { motion } from "framer-motion-3d";

const Music = () => {
	const { curTime, duration, playing, setPlaying, setClickedTime } = useAudio();

	const onClickHandler = () => {
		setPlaying(!playing);
	};

	const onChange = (isVisible: any) => {
		// isVisible ? setPlaying(true) : setPlaying(false);
	};

	return (
		<div className='relative bg-darkBlue h-[150vh] p-20'>
			<div className='relative w-10/12 mx-auto font-[SF_Pro_Display_Regular] text-white font-bold text-4xl'>
				<div className='w-max mx-auto'>music</div>
				<SvgRenderer filePath='assets/vectors/music.svg' />
				<audio id='audio' className='w-10/12 mx-auto'>
					<source
						src='assets/audio/master.mp3'
						type='audio/mp3'
						className='mx-auto'
					/>
				</audio>
			</div>
			<motion.div
				style={{ backgroundColor: "white" }}
				className='bg-black w-60 h-60 rounded-full drop-shadow-3xl flex items-center justify-center mx-auto my-16'>
				<VisibilitySensor onChange={onChange} delayedCall>
					<div
						className='relative bg-[#B6A49C] w-24 h-34 rounded-full self-center drop-shadow-3xl cursor-pointer'
						onClick={onClickHandler}>
						{playing ? (
							<SvgRenderer filePath='assets/vectors/pause.svg' />
						) : (
							<SvgRenderer filePath='assets/vectors/play.svg' />
						)}
					</div>
				</VisibilitySensor>
			</motion.div>
			<div className='w-1/2 mx-auto flex flex-col items-center justify-between'>
				<div className='text-white flex items-center justify-between w-[27%] mx-auto'>
					<div className={""}>
						<Bars animate={playing} />
					</div>
					<div className='mx-auto'>Runaway ~ Aurora</div>
				</div>
				<div className='text-[#B6A49C]'>Niya Shameer</div>
			</div>
		</div>
	);
};

export default Music;
