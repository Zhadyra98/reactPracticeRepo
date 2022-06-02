import { Component } from 'react';
import './App.css';

class WhoAmI extends Component{
  constructor(props) {
    super(props);
    this.state = {//динамическое Состояние- объект , а пропс мы не можем менять они только для чтения
      years: 27,
      text:'Add year'
    }
  }

  nextYear = () => {
    console.log("+++");
    this.setState(state => ({//Вызывается рендер компонента, если наш новый стейт зависит от старого, мы используем коллбэк функцию, он будет ожидать пока наш старый стейт будет готов к применению
        years: state.years+1 // а если не зависит от пред. значения, то просто передаем новое значение
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div className="class1">
        <button onClick={this.nextYear}>{this.state.text}</button> {/*Eto analog addEventListener */}
        <h1>My name is {name},  surname - {surname}, age - {this.state.years}</h1>
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
//1)у компонетов имеются внутренние стейты
//2)стейты напрямую менять нельзя используем setState()
//3)setState()- asynchronic operation