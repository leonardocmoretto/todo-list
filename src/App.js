import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
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
                  <a className="nav-item nav-link active" href="#">Todos <span class="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#">Pendentes</a>
                  <a className="nav-item nav-link" href="#">Em andamento</a>
                  <a className="nav-item nav-link" href="#">Criar novo</a>
                </div>
              </div>
            </nav>
          </div>
        </div>

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

      </div>
    );
  }
}

export default App;
