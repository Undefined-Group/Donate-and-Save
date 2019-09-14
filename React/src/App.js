import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AddDonor from "./components/AddDonor";
import AddSu from "./components/AddSu";
import DeletF from "./components/DeletF";
import DeleSu from "./components/DeleSu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RepoM from "./components/RepoM";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    search: [0],
    lastSearch: {}
  };

  setSearch = async (sData, lastSearch) => {
    await this.setState({ lastSearch: lastSearch, search: sData });
  };

  render() {
    return (
      <>
        <NavBar />
        <Router>
          <AddSu />
          <Route path="/" exact component={Home} />
          <Route path="/adddonor" component={() => <AddDonor postDonor={this.postDonor} />} />
          <Route path="/requster" component={() => <Search setSearch={this.setSearch} search={this.state.search} />} />
          <Route path="/requster" component={() => <SearchResults lastSearch={this.state.lastSearch} setSearch={this.setSearch} search={this.state.search} />} />
          <Route path="/about" component={AboutUs} />
          <DeletF />
          <DeleSu />
          <RepoM />
          <Footer />
        </Router>
      </>
    );
  }
}


export default App;
