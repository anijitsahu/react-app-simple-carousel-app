// components 
import Title from './components/Title';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary'

// css
import './css/style.css'

const App = () => {
	return (
		<ErrorBoundary>
			<div className="container">
				{ /* including the Title as well as Content components */}
				<Title />
				<Content />
			</div>
		</ErrorBoundary>
	);
};

export default App;
