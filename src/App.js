// components 
import Title from './components/Title';
import Content from './components/Content';

// css
import './css/style.css'

const App = () => {
	return (
		<div className="container">
			{ /* including the Title as well as Content components */}
			<Title />
			<Content />
		</div>
	);
};

export default App;
