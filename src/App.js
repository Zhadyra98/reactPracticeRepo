import { Component } from 'react';
import './App.css';



class WhoAmI extends Component{
  constructor(props) {
    super(props);
    this.state = {//динамическое Состояние- объект , а пропс мы не можем менять они только для чтения
      years: 27
    }
  }
  render() {
    const {name, surname, link} = this.props;
    return (
      <div className="class1">
        <h1>My name is {name},  surname - {surname}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <WhoAmI name='John' surname='Smith' link='facebook.com'/>
        <WhoAmI name='Alex' surname='Almad' link='vk.com'/>
        
    </div>
  );
}

export default App;

/* В Пропс как вы видите  можно передавать все что угодно, но будь осторожна с Объектами ,т.к по нельзя напрямую их всавлять  */
