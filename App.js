import React from 'react';

import Main from './app/Main';

class App extends React.Component {

  render() {
		console.disableYellowBox = true;
		return (
			<Main/>
		)
	}
}

export default App