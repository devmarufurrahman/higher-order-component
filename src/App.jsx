import "./App.css";
import UpdateComponent from "./hoc/main";

function App(props) {
	return (
		<>
			<div>
				<h1>Count: {props.count.count}</h1>
				<br />
				<button onClick={props.increment}>Increment</button>
				<button onClick={props.decrement}>Decrement</button>
			</div>
		</>
	);
}

export default UpdateComponent(App);
