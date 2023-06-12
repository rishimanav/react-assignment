import React from 'react';

import './App.css';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}


function App() {
  return (
    <div className="App">
      Hello World
      <MyComponent/>
    </div>
  );
}

export default App;