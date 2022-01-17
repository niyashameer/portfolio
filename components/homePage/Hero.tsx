import React from "react";
import Button from "../../shared/component/Button";
import SvgRenderer from "../../shared/component/svgRenderer";
import Social from "../../shared/component/social";

export default function Hero() {
	return (
		<div className='relative h-screen'>
			<div className='flex flex-row items-center h-full'>
				<div className='relative w-2/6 flex flex-col px-14 h-[28rem] justify-between'>
					<div className='flex flex-col justify-around h-80 items-center text-lightBlack'>
						<h1 className='font-[SF_Pro_Display_Regular] font-bold text-5xl'>
							Hey, I&apos;m Niya Shameer
						</h1>
						<p className='text-retro text-lg'>
							You’ll find me squeaking at something exciting that I came across
						</p>
						<div className='w-full'>
							<Button text='Resume'></Button>
						</div>
					</div>
					<div className='w-full'>
						<Social />
					</div>
				</div>
				<div className='w-[47%] absolute z-0 bottom-0 right-10'>
					<SvgRenderer
						filePath='/assets/vectors/hero.png'
						widthClassProperties='w-full'
					/>
				</div>
			</div>
		</div>
	);
}
