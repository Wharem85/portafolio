import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@pages/index';
import Layout from '@containers/Layout';
import AppContext from '@context/AppContext';
import '@styles/globals.css'

const App = () => {
	return (
		<AppContext.Provider>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
