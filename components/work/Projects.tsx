import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectCreative, Pagination } from "swiper";
import Link from "next/link";

const Projects = () => {
	const hoverLink = (event: any) => {
		const heading = document.getElementById("header-text");
		heading?.classList.add("opacity-30");
	};
	const hoverLeave = (event: any) => {
		const heading = document.getElementById("header-text");
		heading?.classList.remove("opacity-30");
	};
	return (
    <div className='w-full h-full px-14 py-14 text-lightText'>
      <div className='w-max text-lightText font-bold text-4xl font-lightBlack'>
				projects
			</div>
			<Swiper
				grabCursor={true}
				effect={"creative"}
				pagination={{
					clickable: true,
				}}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ["100%", 0, 0],
					},
				}}
				modules={[EffectCreative, Pagination]}
				className='mySwiper'>
				<SwiperSlide>
					<Link href='https://heiphen.com/'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/heiphen.jpg' alt="heiphen img"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Website
							</div>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='https://flamapp.com/careers.html'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/flamapp_careers.jpg' alt="flamapp img"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Website
							</div>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='https://www.figma.com/file/9UOA3L9NkfeuWK6uIubX2H/Atypical?node-id=0%3A1'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/atypical.jpg' alt="atypical image"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Figma
							</div>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<img src='/assets/projects/greenarray.jpg' alt="greenarray img"/>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='https://techanalogy.org/'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/ta.jpg' alt="techanalogy img"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Website
							</div>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='https://developer.amazon.com/alexa/console/ask'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/skills.jpg' alt="alexa skills img"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Alexa Developer Console
							</div>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='https://alexadevsrm.com/'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/alexa_page.jpg' alt="alexa dev srm img"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Website
							</div>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='/'>
						<a
							target='_blank'
							className='projects-link'
							id='link-element'
							onMouseOver={hoverLink}
							onMouseLeave={hoverLeave}>
							<img src='/assets/projects/portfolio.jpg' alt="personal portfolio img"/>
							<div className='middle featured-link rounded p-2 bg-retro'>
								Visit Website
							</div>
						</a>
					</Link>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Projects;
