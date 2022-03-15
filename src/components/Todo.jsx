import Modal from './Modal'
import Backdrop from './Backdrop'

import { useState } from 'react' 

function Todo(props) {

  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  function deleteHandler() {
    setModalIsOpen(true) 
  }

  function closeModelHandler() {
    setModalIsOpen(false) 
  }

  return(
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onConfirm={closeModelHandler} onCancel={closeModelHandler} /> }
      { modalIsOpen && <Backdrop onClick={closeModelHandler} /> }
    </div>
    );
}

export default Todo