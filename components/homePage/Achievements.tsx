import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Achievements = () => {
	return (
		<div className='w-full h-screen px-14 xsm:pb-14 mb-8 xsm:mb-0 relative'>
			<br/>
			<div className='w-max text-lightText font-bold text-4xl font-lightBlack'>
				achievements
			</div>
			<div className='flex flex-col sm:grid grid-cols-5 h-full items-center'>
				<div className='w-[90%] sm:w-[300px] md:w-[437px] lg:mx-40 my-24 flex-col flex col-span-4'>
					<div className='flex flex-col'>
						<hr className='border bg-lightBlack' />
						<div className='h-40 sm:h-56 md:h-40 mt-4 mx-4 font-bold grid grid-cols-10'>
							<span className='col-span-2 text-lightGreen text-2xl'>01</span>
							<span className='text-xl xsm:text-3xl lg:text-4xl font-semibold col-span-6 mt-4'>
								Valedictorian academic year 2019-2020
							</span>
						</div>
					</div>
					<div className='flex flex-col'>
						<hr className='border bg-lightBlack' />
						<div className='h-40 sm:h-56 md:h-40 mt-4 mx-4 font-bold grid grid-cols-10'>
							<span className='col-span-2 text-lightGreen text-2xl'>02</span>
							<span className='text-xl xsm:text-3xl lg:text-4xl font-semibold col-span-6 mt-4'>
								Finalist Hackedemic - Hackathon
							</span>
						</div>
					</div>
					<div className='flex flex-col'>
						<hr className='border bg-lightBlack' />
						<div className='h-40 sm:h-56 md:h-40 mt-4 mx-4 font-bold grid grid-cols-10'>
							<span className='col-span-2 text-lightGreen text-2xl'>03</span>
							<span className='text-xl xsm:text-3xl lg:text-4xl font-semibold col-span-6 mt-4'>
								MUNs, music, debate, elocution
							</span>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap sm:flex-col col-span-1 text-right xsm:my-24 xsm:h-[30rem] justify-around'>
					<CountUp start={0} end={870} suffix='+' duration={2}>
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<div className='flex flex-col text-lightGreen font-bold w-max'>
									<span className='text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-center' ref={countUpRef}>
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
								<div className='flex flex-col text-lightGreen font-bold w-max'>
									<span className='text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-center' ref={countUpRef}>
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
								<div className='flex flex-col text-lightGreen font-bold w-max'>
									<span className='text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-center' ref={countUpRef}>
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
								<div className='flex flex-col text-lightGreen font-bold w-max'>
									<span className='text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-center' ref={countUpRef}>
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
