import React from 'react';

class Form extends React.Component{
  state ={
    name:'',
    quantity:0
  };

  handleSubmit= (event) =>{
    event.preventDefault();
    this.props.addArticle(this.state);
    };

  render(){
    return(
      <div>
        <h3>Ajouter des Articles à acheter</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="number" placeholder="quantité" value={this.state.quatity} onChange={(event)=>this.setState({ quantity: event.target.value})}/>
            <input type="text" placeholder="article" value={this.state.name} onChange={(event)=>this.setState({ name: event.target.value})}/>
            <button type="submit">Ajouter</button>
          </form>
          <div>{this.state.quantity}</div>
          <div>{this.state.name}</div>
      </div>

    );
  }
}

export default Form;
