import React from 'react'
import { ToastContainer } from '../ToastContainer'
import { AddToastButton } from './styled'
import toast from '../ToastService'

export const TestingToastsComponent = (
	toastType,
	toastPosition,
	size,
	title,
	titleColor,
	backgroundColor,
	toastAnimation,
) => {
	const handleToast = () => {
		toast.setContainer()
		toast.generateToast(
			toastType,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
		)
	}

	return (
		<div>
			<AddToastButton onClick={handleToast}>
				Add Toast
			</AddToastButton>
			<ToastContainer position={toastPosition} />
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
