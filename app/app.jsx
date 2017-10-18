'use strict';

import React from 'react';
import Navbar from './components/navbar';

const App = (props) => (
	<div>
		<Navbar />
		<div>
			{props.children}
		</div>
	</div>
);

export default App;