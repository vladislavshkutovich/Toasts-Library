import React from 'react'
import { ToastContainer } from '../ToastContainer'
import { AddToastButton } from './styled'

export const TestingToastsComponent = (position) => {
	const handleToast = () => {}

	return (
		<div>
			<AddToastButton onClick={handleToast}>
				Add Toast
			</AddToastButton>
			<ToastContainer position={position} />
		</div>
	)
}

/*
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
*/
