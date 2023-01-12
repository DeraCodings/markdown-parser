import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css'
import Input from './components/Input'

import Output from './components/Output'
import image1 from './assets/window.png';

function App() {

  const inlineCode = '`This is a code`';

  const anotherMarkdown = `# Simple Markdown Parser app

  ## Made with React

  [Github link](https://github.com/DeraCodings)

  paragraph text

  &ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;Indented paragraph text

  ${inlineCode}

  - first item

  > a block quote

  ![windows logo](${image1})

  **boldened**

  ### *try editing the code*
  `;

  const [input, setInput] = useState(anotherMarkdown);

  function handleInput(e) {
    setInput(e.target.value);
  }


  return (
    <div className="App">
      <h1 className='first-heading'>Markdown Parser</h1>
      <Input inputValue={input} handleInput={handleInput} />
      <Output outputValue={input} />
      <footer>
        <hr />
        <p>Designed By Otuonye Humphrey</p>
      </footer>
    </div>
  )
}

export default App
