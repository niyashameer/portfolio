import React, { useEffect, useState } from "react";
import SvgRenderer from "./svgRenderer";

interface Props {
	filePath: string;
	text1: string;
	text2: string;
	text3: string;
	text4: string;
}

const Club = ({ filePath, text1, text2, text3, text4 }: Props) => {
	const [hide, setHide] = useState<boolean>(false);

	useEffect(() => {}, [hide]);

	const mouseOver = () => {
		// const element = document.getElementById("on-hover");
		// const parent = document.getElementById("parent-hover");
		// parent?.classList.add("hidden");
		// element?.classList.remove("hidden");
		// console.log('mouseover')
		setHide(true);
		console.log("ok");
	};
	const mouseOut = () => {
		// const element = document.getElementById("on-hover");
		// const parent = document.getElementById("parent-hover");
		// element?.classList.add("hidden");
		// parent?.classList.remove("hidden");
		setHide(false);
		console.log("mouseout");
	};

	return (
		<>
			<div
				className='grid grid-cols-4 grid-rows-2 gap-2 w-max h-[60%] items-center place-items-center'
				id='parent-hover'
				data-kimochii-pointer='expanded'
				onMouseEnter={mouseOver}
				onMouseLeave={mouseOut}>
				<div className='rounded-2xl w-20 h-20'>
					<SvgRenderer filePath={filePath} />
				</div>
				<div
					className={`${
						hide
							? "rounded-2xl w-20 h-20"
							: "border border-lightGreen rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold"
					} transition-all delay-20 duration-400`}>
					{hide ? <SvgRenderer filePath={filePath} /> : text2}
				</div>
				<div className='rounded-2xl w-20 h-20'>
					<SvgRenderer filePath={filePath} />
				</div>
				<div
					className={`${
						hide
							? "rounded-2xl w-20 h-20"
							: "border border-lightGreen rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold"
					} transition-all delay-20 duration-400`}>
					{hide ? <SvgRenderer filePath={filePath} /> : text4}
				</div>
				<div
					className={`${
						hide ? "" : "border border-lightGreen"
					} rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold`}>
					{text1}
				</div>
				<div
					className={`${
						hide
							? "rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold"
							: "rounded-2xl w-20 h-20"
					} transition-all delay-20 duration-400`}>
					{hide ? text2 : <SvgRenderer filePath={filePath} />}
				</div>
				<div
					className={`${
						hide ? "" : "border border-lightGreen"
					} rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold`}>
					{text3}
				</div>
				<div
					className={`${
						hide
							? "rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold"
							: "rounded-2xl w-20 h-20"
					} transition-all delay-20 duration-400`}>
					{hide ? text4 : <SvgRenderer filePath={filePath} />}
				</div>
			</div>
		</>
	);
};

export default Club;
