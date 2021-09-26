import React, { useState } from 'react'


function App({ prihodi }) {
  const [selected, setSelected] = useState(0)


  return (
    <>
      <button
        onClick={() => {
            setSelected(selected + 1)

        }}
      >
        Submit
      </button>
      <input value={text} onChange={(e) => {
        setText(e.target.value)
      }
      <button onClick={() => {
        `<hr> <span class="prvi-span"> ${prihodi} </span> <span class="drugi-span"> ${inputIznos.value}</span> <hr>`
      }
     } >Dodaj u niz</button>
    </>
  )
}

export default App