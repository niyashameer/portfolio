import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Achievements = () => {
	return (
		<div className='w-full h-screen px-14 pb-14 relative'>
			<div className='w-max text-lightBlack font-bold text-4xl font-lightBlack'>
				achievements
			</div>
			<div className='grid grid-cols-5'>
				<div className='w-[40%] mx-40 my-24 flex-col flex col-span-4'>
					<div className='flex flex-col'>
						<hr className='border bg-lightBlack' />
						<div className='h-40 mt-4 mx-4 font-bold grid grid-cols-10'>
							<span className='col-span-2 text-orange text-2xl'>01</span>
							<span className='text-5xl col-span-6 mt-4'>Valedictorian</span>
						</div>
					</div>
					<div className='flex flex-col'>
						<hr className='border bg-lightBlack' />
						<div className='h-40 mt-4 mx-4 font-bold grid grid-cols-10'>
							<span className='col-span-2 text-orange text-2xl'>02</span>
							<span className='text-5xl col-span-6 mt-4'>
								Finalist Hackedmic
							</span>
						</div>
					</div>
					<div className='flex flex-col'>
						<hr className='border bg-lightBlack' />
						<div className='h-40 mt-4 mx-4 font-bold grid grid-cols-10'>
							<span className='col-span-2 text-orange text-2xl'>03</span>
							<span className='text-5xl col-span-6 mt-4'>
								Finalist Hackedmic
							</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col col-span-1 text-right my-24 h-[30rem] justify-around'>
					<CountUp start={0} end={870} suffix='+' duration={2}>
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<div className='grid flex flex-col text-darkBlue font-bold w-max'>
									<span className='text-5xl text-center' ref={countUpRef}>
										870
									</span>
									<span className='text-center italic'>academics</span>
								</div>
							</VisibilitySensor>
						)}
					</CountUp>
					<CountUp start={0} end={870} suffix='+' duration={2}>
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<div className='grid flex flex-col text-darkBlue font-bold w-max'>
									<span className='text-5xl text-center' ref={countUpRef}>
										870
									</span>
									<span className='text-center italic'>academics</span>
								</div>
							</VisibilitySensor>
						)}
					</CountUp>
					<CountUp start={0} end={870} suffix='+' duration={2}>
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<div className='grid flex flex-col text-darkBlue font-bold w-max'>
									<span className='text-5xl text-center' ref={countUpRef}>
										870
									</span>
									<span className='text-center italic'>academics</span>
								</div>
							</VisibilitySensor>
						)}
					</CountUp>
					<CountUp start={0} end={870} suffix='+' duration={2}>
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<div className='grid flex flex-col text-darkBlue font-bold w-max'>
									<span className='text-5xl text-center' ref={countUpRef}>
										870
									</span>
									<span className='text-center italic'>academics</span>
								</div>
							</VisibilitySensor>
						)}
					</CountUp>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
