import * as React from 'react';

let { useState, useEffect } = React;

interface IHeaderProps {};

export default (props: IHeaderProps) => {
	const canvasHeight = useHandleElementHeight();

	return (
		<div id='page-header'>
			<canvas id='hyperdrive' style={{ width: '100%', height: canvasHeight }}></canvas>
		</div>
	)
}

function useHandleElementHeight() {
	const windowHeight: number = (
		window.innerWidth <= 680 ? window.innerHeight * .17 : window.innerHeight / 4
	);

	const [height, setHeight] = useState(windowHeight);

	useEffect(() => {
		const handleResize = () => setHeight(windowHeight);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return height;
}