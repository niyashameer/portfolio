import React, { useEffect } from "react";
import SvgRenderer from "../../shared/component/svgRenderer";
import useAudio from "../../shared/customHooks/useAudio";
import VisibilitySensor from "react-visibility-sensor";
import Bars from "../../shared/component/Bars";
import { motion } from "framer-motion-3d";
import Lottie from "lottie-web";
import music from "../../public/assets/lottie/music.json";

const Music = () => {
	const { curTime, duration, playing, setPlaying, setClickedTime } = useAudio();

	const onClickHandler = () => {
		setPlaying(!playing);
	};

	const onChange = (isVisible: any) => {
		// isVisible ? setPlaying(true) : setPlaying(false);
	};

	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector("#icon")!,
			animationData: music,
			renderer: "svg",
		});
		Lottie.loadAnimation({
			container: document.querySelector("#icon1")!,
			animationData: music,
			renderer: "svg",
		});
		Lottie.loadAnimation({
			container: document.querySelector("#icon2")!,
			animationData: music,
			renderer: "svg",
		});
		Lottie.loadAnimation({
			container: document.querySelector("#icon3")!,
			animationData: music,
			renderer: "svg",
		});
		Lottie.loadAnimation({
			container: document.querySelector("#icon4")!,
			animationData: music,
			renderer: "svg",
		});
	}, [music]);

	return (
		<div className='relative h-screen p-20 flex flex-col items-center justify-center'>
			<div className='relative w-10/12 mx-auto font-[SF_Pro_Display_Regular] text-lightText font-bold text-4xl'>
				<div className='relative w-max mx-auto flex h-20 items-center'>
					<span className='h-full w-max absolute -top-2 -left-16' id='icon' />
					music / cover
				</div>
				{/* <SvgRenderer filePath='assets/vectors/music.svg' /> */}
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
			{/* <div className='w-[10%] absolute left-10' id='icon1'></div> */}
			{/* <div className='w-[10%] absolute right-10 top-2' id='icon2'></div> */}
			{/* <div className='w-[10%] absolute right-80 bottom-72' id='icon3'></div> */}
			{/* <div className='w-[30%] absolute right-100 bottom-0' id='icon4'></div> */}
		</div>
	);
};

export default Music;
