import React from "react";
import SvgRenderer from "./svgRenderer";

interface Props {
    filePath: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

const Club = ({ filePath, text1, text2, text3, text4 }: Props) => {
	return (
		<div className='grid grid-cols-4 grid-rows-2 gap-2 w-max h-[60%] items-center place-items-center'>
			<div className='rounded-2xl w-20 h-20'>
				<SvgRenderer filePath={filePath} />
			</div>
			<div className='border border-darkRed rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold'>
				{text2}
			</div>
			<div className='rounded-2xl w-20 h-20'>
				<SvgRenderer filePath={filePath} />
			</div>
			<div className='border border-darkRed rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold'>
				{text4}
			</div>
			<div className='border border-darkRed rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold'>
				{text1}
			</div>
			<div className='rounded-2xl w-20 h-20'>
				<SvgRenderer filePath={filePath} />
			</div>
			<div className='border border-darkRed rounded-lg w-20 h-20 flex items-center justify-center text-2xl font-bold'>
				{text3}
			</div>
			<div className='rounded-2xl w-20 h-20'>
				<SvgRenderer filePath={filePath} />
			</div>
		</div>
	);
};

export default Club;
