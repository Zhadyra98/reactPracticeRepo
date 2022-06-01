import './App.css';


// function WhoAmI (props) {  Объект пропс форм. по умолчания, можно и так написать, но второй вариант чаще исполь
//   return (
//     <div className="class1">
//       <h1>My name is {props.name},  surname - {props.surname}</h1>  Пропс не динамический здесь мы не можем менять его занчения 
//       <a href={props.link}>My profile</a>
//     </div>//Объекты не можем вставлять напрямую JSX
//   )
// }

function WhoAmI ({name, surname, link}) {
  return (
    <div className="class1">
      <h1>My name is {name},  surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com'/>
        <WhoAmI name={() => {return 'John'}} surname='Almad' link='vk.com'/>
        {/* <WhoAmI name={{firstName : 'Alex'}} surname='Smith' link='facebook.com'/>
        <WhoAmI name={{firstName : 'Alex'}} surname='Almad' link='vk.com'/>
        <WhoAmI name={'Sam'} surname='Smith' link='facebook.com'/>
        <WhoAmI name={'Sam'} surname='Almad' link='vk.com'/> */}
{/* В Пропс как вы видите  можно передавать все что угодно, но будь осторожна с Объектами ,т.к по нельзя напрямую их всавлять  */}
    </div>
  );
}

export default App;
