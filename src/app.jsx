/** @jsx h */
import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./components/header";

import Home from "./pages/home";
import Profile from "./pages/profile";

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<div className="lg:pl-32 mt-12">
					<div className="max-w-md">
						<Router>
							<Home path="/" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
						</Router>
					</div>
				</div>
			</div>
		);
	}
}
