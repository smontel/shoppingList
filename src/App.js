import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Component/Form.js'
import ItemList from './Component/ItemList.js'
import './App.css';

class App extends Component {
  state={
    articles: []
  }
  addArticle = (article) =>{
      console.log('article recu par le parent App', article);
      let previousState = this.state.articles;
      previousState.push(article);
      this.setState({article:previousState});
  }


  render() {
    return (
      <div>

        <h1> Shopping List</h1>
        < Form formTitle='Ajoutez un article' addArticle={this.addArticle}/>
        < ItemList />
      </div>
    );
  }
}

export default App;
