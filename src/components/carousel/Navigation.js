// Navigation component
export default ({ updateImage, position }) => {
	const classStyle = (position == "left") ? "fas fa-angle-left arrow" : "fas fa-angle-right arrow arrow-right"

	return (
		<i id={position} className={classStyle} onClick={updateImage}></i>
	);
}
