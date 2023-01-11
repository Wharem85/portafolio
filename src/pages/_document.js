import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

const _document = () => {
	return (
		<Html>
			<Head>
				<title>PortFolio</title>
				<link rel='icon' href='/logo.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default _document;
