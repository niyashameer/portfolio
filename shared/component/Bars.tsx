import React from "react";

interface Props {
	animate: boolean;
}

const Bars = ({ animate }: Props) => {
	return (
		<div className={`${animate ? "animate-bars" : ""} bars-icon`}>
			<span />
			<span />
			<span />
		</div>
	);
};

export default Bars;
