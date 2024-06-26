import './App.css';
import React, {useState} from 'react';
import {marked} from 'marked'
import UselocalStorage from './Uselocalstorage';

import Doc from './Doc';
function App() { 
  const [code, setCode] = UselocalStorage("data",'## Hello');
    const [compiled, setCompiled] = UselocalStorage("preview",'<h2 id="hello">Hello</h2>');
    const [hide, hidePreview] = useState(true);
  const [notshow,show]=useState(true);
    const openMD = () => {
      console.log(0);
      hidePreview(true);
      show(true);
    };
  
    const openPreview = () => {
      console.log(0);
      hidePreview(false);
      show(true);
    };

    const opendoc = () => {
      console.log(0);
      show(false);
    };
   
    const handleChange = (e) => {
      setCode(e.target.value);
      setCompiled(marked.parse(e.target.value));
    };
  
    return (
      <>
 
        <h1>MarkDown Previewer React App</h1>
        <div className="container">
          <div className="btns">
            <button onClick={openMD} className="btn">MarkDown</button>
            <button onClick={openPreview}>Preview</button>
           <button onClick={opendoc} className="btn docs">Docs</button> 
          </div>
          {notshow&& (hide ?
            <div>
              <textarea onChange={handleChange} value={code} />
            </div> :
            <div>
              <textarea value={compiled} />
            </div>)}
        </div>

        {notshow?"":<Doc/>}



      </>
    );
  }
 






export default App;


