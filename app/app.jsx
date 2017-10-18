'use strict';

import React from 'react';
import Navbar from './components/navbar';

const App = (props) => (
	<div>
		<Navbar />
		{props.children}
	</div>
);

export default App;