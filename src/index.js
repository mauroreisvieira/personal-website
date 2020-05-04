/** @jsx preact.h */
import * as preact from 'preact';
import { Router } from "preact-router";

import Header from "./components/header";

import Home from "./pages/home";
import Blog from "./pages/blog";

const App = () => {
    return (
        <div id="app">
            <Header />
            <Router>
                <Home path="/" />
                <Blog path="/profile/" user="me" />
            </Router>
        </div>
    );
};

export default App;
