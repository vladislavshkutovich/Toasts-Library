import errorIcon from '../assets/svg/error.svg'
import infoIcon from '../assets/svg/info.svg'
import successIcon from '../assets/svg/success.svg'
import warningIcon from '../assets/svg/warning.svg'
import closeIcon from '../assets/svg/cross.svg'

export const INFO_TOAST = {
	TITLE: 'Info Toast Example',
	TYPE: 'info',
	ICON: infoIcon,
	CLOSE: closeIcon,
	BACKGROUND_COLOR: '#9A40D3',
	COLOR: '#FFFFFF',
}
export const WARNING_TOAST = {
	TITLE: 'Warning Toast Example',
	TYPE: 'warning',
	ICON: warningIcon,
	CLOSE: closeIcon,
	BACKGROUND_COLOR: '#F4E048',
	COLOR: '#000000',
}
export const ERROR_TOAST = {
	TITLE: 'Error Toast Example',
	TYPE: 'error',
	ICON: errorIcon,
	CLOSE: closeIcon,
	BACKGROUND_COLOR: '#E25837',
	COLOR: '#FFFFFF',
}
export const SUCCESS_TOAST = {
	TITLE: 'Success Toast Example',
	TYPE: 'success',
	ICON: successIcon,
	CLOSE: closeIcon,
	BACKGROUND_COLOR: '#37E29A',
	COLOR: '#FFFFFF',
}

export const TOAST_POSITIONS = {
	['top-right']: {
		top: '15px',
		rigth: '15px',
	},
	['top-left']: {
		top: '15px',
		left: '15px',
	},
	['bottom-right']: {
		rigth: '15px',
		bottom: '15px',
	},
	['bottom-left']: {
		bottom: '15px',
		left: '15px',
	},
}

export const TOAST_SIZE = {
	['small']: {
		width: '300px',
		height: '60px',
		padding: '10px',
		fontSize: '18px',
		widthClose: '15px',
		widthSvg: '35px',
	},
	['medium']: {
		width: '350px',
		height: '70px',
		padding: '15px',
		fontSize: '20px',
		widthClose: '20px',
		widthSvg: '40px',
	},
	['large']: {
		width: '400px',
		height: '80px',
		padding: '20px',
		fontSize: '22px',
		widthClose: '25px',
		widthSvg: '45px',
	},
}
