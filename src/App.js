import List from './components/List';
import Options from './components/Options';
import React, { useState,useEffect } from 'react';


function App() {
  const [paras,setParas] = useState([]);
  const [inputValue,setInputValue]= useState(1)
  const [tag,setTag] = useState('p');
  const [includeHtml,setIncludeHtml] = useState('Yes');
  const [copied,setCopied]=useState(false);

  useEffect(()=>{
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-width-lorem=1`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setParas(data))
  },[inputValue])

  return (
    <div className="App">
       <h1>Text Generator</h1>
       <div className="container">
        <Options 
          inputValue={inputValue}
          setInputValue={setInputValue}
          tag={tag}
          setTag={setTag}
          includeHtml={includeHtml}
          setIncludeHtml={setIncludeHtml}
          copied={copied}
          setCopied={setCopied}
          paras={paras}
        />
        <List 
          paras={paras}
          tag={tag}
          includeHtml={includeHtml}
        />
      </div>
    </div>
  );
}

export default App;
