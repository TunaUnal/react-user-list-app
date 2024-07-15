import './App.css';
import Users from './components/Users';
function App() {
	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<h1 className='text-center'>React User List App</h1>
				</div>
				<div className="row">
					<Users/>
				</div>
			</div>
		</>
	);
}

export default App;
