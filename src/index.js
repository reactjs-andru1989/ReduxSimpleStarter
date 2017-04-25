import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// create a new component. this component should produce some HTML
const API_KEY = 'AIzaSyB-T5NfPqLvor0VIEYQCfdAMGJIkinBiNo';

/*const App = () => {
return (
<div>
<SearchBar />
</div>
); // JSX
}*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'bmx' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}
// take this component's HTML and put it in the DOM

ReacDOM.render(<App />, document.querySelector('.container')); // <App /> creates an instance of App thanks to JSX
