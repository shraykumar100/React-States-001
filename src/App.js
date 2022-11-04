import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from 'react';

function App () {

  const dataObj = {
    title: [ 'The WET Codebase', 'Goodby, Clean Code', 'My Decade In Review', 'What Are The React Team Principles' ],
    time: [ 'Sunday 4th, 2020', 'Friday 22nd 2019', 'Saturday 11th 2018', 'Thursday 4th 2015' ],
    duration: [ '11', '5', '5', '5' ],
    task: [ 'Come waste your time with me', 'Let clean code guide you. Than let it go.', 'A personal reflection', '' ]
  }

  let theme = '';

  const [themeMode, setNewThemeMode] = useState( theme );

  function onChange ( themeMode ) {
    setNewThemeMode( themeMode );
  }

  return (
    <div className={ `mainComp ${ themeMode }` }>
      <div className="center">
      <Header onChange={onChange} />
      <Card themeChange={themeMode} title={ dataObj.title[0] } time={dataObj.time[0]} duration={dataObj.duration[0]} task={dataObj.task[0]} />
      <Card themeChange={themeMode} title={ dataObj.title[1] } time={dataObj.time[1]} duration={dataObj.duration[1]} task={dataObj.task[1]}/>
      <Card themeChange={themeMode} title={ dataObj.title[2] } time={dataObj.time[2]} duration={dataObj.duration[2]} task={dataObj.task[2]}/>
      <Card themeChange={themeMode} title={ dataObj.title[3] } time={dataObj.time[3]} duration={dataObj.duration[3]} task={dataObj.task[3]}/>
      </div>
    </div>
  );
}

export default App;