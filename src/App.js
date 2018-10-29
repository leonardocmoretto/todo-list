import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    currentTab: 'lists',
    typeLists: 'all'
  };

  changeTabs(currentTab, typeLists){
    this.setState({ currentTab,typeLists });
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-sm">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="#">DESAFIO TODO</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" onClick={() => this.changeTabs('lists','all')}>Todos</a>
                  <a className="nav-item nav-link" onClick={() => this.changeTabs('lists','todo')}>Em andamento</a>
                  <a className="nav-item nav-link" onClick={() => this.changeTabs('lists','done')}>Finalizados</a>
                  <a className="nav-item nav-link" onClick={() => this.changeTabs('add', null)}>Criar novo</a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <br/>
          </div>
        </div>

        {this.state.currentTab === 'lists' && (
          <div className="row">
            <div className="col-sm">
              <ul className="list-group">
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item list-group-item-success">This is a success list group item</li>
              </ul>
            </div>
          </div>
        )}

        {this.state.currentTab === 'add' && (
          <div className="row">
            <div className="col-sm">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Example select</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                  <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </form>
            </div>
          </div>
        )}


      </div>
    );
  }
}

export default App;
