import React from 'react';
import ReacDOM from 'react-dom';

// create a new component. this component should produce some HTML

const App = () => {
  return <div>Hi !</div>; // JSX
}
// take this component's HTML and put it in the DOM

ReacDOM.render(<App />, document.querySelector('.container')); // <App /> creates an instance of App thanks to JSX
