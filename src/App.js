import React, { Component } from 'react';
import axios from 'axios';

const endPoint = 'http://localhost:3000/';

class App extends Component {

  state = {
    currentTab: 'lists',
    typeLists: 'all',
    todos: [],
    fieldName: '',
    fieldJob: '',
    fieldDescription: ''
  };

  componentDidMount(){
    this.queryTodos();
  }

  queryTodos(){
    var path = `${endPoint}todos`;
    if(this.state.typeLists !== 'all'){ path = path+`/${this.state.typeLists}`; }
    axios.get(path)
      .then(response =>{
        this.populateTodos(response.data.reverse());
        console.log(JSON.stringify(response.data));
      })
      .catch(error =>{
        console.log(error);
      })
  }

  markDone(id){
    axios.put(`${endPoint}todos/markDone`, {
      id,
      done: true
    })
      .then(response =>{
        alert("Todo Finalizado com sucesso!");
        this.queryTodos();
      })
      .catch(error =>{
        console.log(error);
      });
  }

  createTodo(){
    if(this.state.fieldName === '' || this.state.fieldJob === '' || this.state.fieldDescription === ''){
      alert("Você precisa preencher todos os campos");
      return;
    }
    axios.post(`${endPoint}todos`, {
      description: this.state.fieldDescription,
      owner: {name:this.state.fieldName, job_title:this.state.fieldJob}
    })
      .then(response =>{
        this.setState({ fieldName:'', fieldJob:'', fieldDescription:'', currentTab: 'lists', typeLists: 'all' }, () => {
          this.queryTodos();
        });
      })
      .catch(error =>{
        console.log(error);
      });
  }

  populateTodos(todos){
    this.setState({ todos });
  }

  changeTabs(currentTab, typeLists){
    this.setState({ currentTab,typeLists }, () => {
      if(this.state.currentTab !== "add"){ this.queryTodos() }
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
                  <a className="nav-item nav-link" onClick={() => this.changeTabs('lists','pending')}>Em andamento</a>
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
                {this.state.todos.map((item) => (
                  <li className={item.done ? "list-group-item list-group-item-success" : "list-group-item"}><b>{item.description}</b> <p>{item.owner.name} - {item.owner.job_title}</p>{!item.done && (<button type="button" class="btn btn-outline-success float-right" onClick={() => this.markDone(item._id)}>Finalizar</button>)}</li>
                ))
                }
              </ul>
            </div>
          </div>
        )}

        {this.state.currentTab === 'add' && (
          <div className="row">
            <div className="col-sm">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Descricao</label>
                  <input type="text" class="form-control" placeholder="Ex: Fazer deploy" value={this.state.fieldDescription} onChange={this.handleChange('fieldDescription')}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput2">Nome:</label>
                  <input type="text" class="form-control" placeholder="Ex: Leo Cunha" value={this.state.fieldName} onChange={this.handleChange('fieldName')}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Cargo:</label>
                  <input type="text" class="form-control" placeholder="Ex: FullStack" value={this.state.fieldJob} onChange={this.handleChange('fieldJob')}/>
                </div>
                <div className="form-group">
                  <input class="btn btn-primary" type="button" value="Criar Todo" onClick={() => this.createTodo()}/>
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
