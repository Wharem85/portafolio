import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@pages/index';
import AppContext from '@context/AppContext';
import '@styles/globals.css'

const App = () => {
	return (
		<AppContext.Provider>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" />
					<Route exact path="/skills" />
					<Route exact path="/work" />
					<Route exact path="/contact" />
				</Switch>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
