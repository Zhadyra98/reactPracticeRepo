import { Component } from 'react';

import './App.css';

class WhoAmI extends Component{
  constructor(props) {
    super(props);
    this.state = {//динамическое Состояние- объект , а пропс мы не можем менять они только для чтения
      years: 27,
      text:'Add year',
      position: ''
    }
  }

  commitInputChahges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  nextYear = () => {
    console.log("+++");
    this.setState(state => ({//Вызывается рендер компонента, если наш новый стейт зависит от старого, мы используем коллбэк функцию, он будет ожидать пока наш старый стейт будет готов к применению
        years: state.years+1 // а если не зависит от пред. значения, то просто передаем новое значение
    }))
  }

  render() {

    const {name, surname, link} = this.props;
    const {years, position} = this.state;


    return (
      // <>Реакт сам поймет что это тег Fragment
      <>
        <button onClick={this.nextYear}>{this.state.text}</button> {/*Eto analog addEventListener */}
        <h1>My name is {name},  
        surname - {surname}, 
        age - {years}, 
        position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Eneter job</span>
          <input type="text" onChange={(e) => this.commitInputChahges(e, 'some color')}/>
        </form>
      </>
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

//Есть три способа использования методов в классах(почему мы именно используем стрелочные )
//1) стерлосные ф-и, так как у них не имеется контекст вызова, ссылаются на родительский контекст -> this определяется правильно
//2) обычный метод + .bind() в конструкторе, таким образом мы четко присваем контекст вызова к ф-и
//3)обычный метод nextYear + <button onClick={() => this.nextYear()}>{text}</button>   таким образом мы вызываем метод с контекстом вызова родительским

// <input type="text" onChange={(e) => this.commitInputChahges(e, 'some color')}/>
//  commitInputChahges = (e, color) => {
//    console.log(color);
//    this.setState({
 //     position: e.target.value
//    })
 // } //   А ТАКИМ ОБРАЗОМ ПЕРЕДАЕМ АРГУМЕНТЫ В НАШИ МЕТОДЫ 