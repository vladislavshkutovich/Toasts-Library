// import App from './App'
// export { App }

import React from 'react'
import ReactDOM from 'react-dom/client'
import Toast from '@/components/Toast'

const root = ReactDOM.createRoot(
	document.getElementById('root'),
)
root.render(
	<React.StrictMode>
		<Toast />
	</React.StrictMode>,
)
