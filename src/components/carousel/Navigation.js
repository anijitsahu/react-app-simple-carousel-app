// Navigation component
export default (props) => {

	const { updateImage, position, srcNumber, total } = props
	const classStyle = (position == "left") ? "fas fa-less-than arrow" : "fas fa-greater-than arrow arrow-right"

	return (
		<i id={position} className={classStyle} onClick={updateImage}></i>
	);
}


export default Navigation;