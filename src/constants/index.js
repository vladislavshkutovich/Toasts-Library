import errorIcon from '../assets/svg/error.svg'
import infoIcon from '../assets/svg/info.svg'
import successIcon from '../assets/svg/success.svg'
import warningIcon from '../assets/svg/warning.svg'
import closeIcon from '../assets/svg/cross.svg'
import closeIconBlack from '../assets/svg/crossBlack.svg'

export const INFO_TOAST = {
	titleByDefault: 'Info Toast Example',
	typeByDefault: 'info',
	iconByDefault: infoIcon,
	closeIconByDefault: closeIcon,
	backgroundColorByDefault: '#9A40D3',
	colorByDefault: '#FFFFFF',
}
export const WARNING_TOAST = {
	titleByDefault: 'Warning Toast Example',
	typeByDefault: 'warning',
	iconByDefault: warningIcon,
	closeIconByDefault: closeIconBlack,
	backgroundColorByDefault: '#F4E048',
	colorByDefault: '#000000',
}
export const ERROR_TOAST = {
	titleByDefault: 'Error Toast Example',
	typeByDefault: 'error',
	iconByDefault: errorIcon,
	closeIconByDefault: closeIcon,
	backgroundColorByDefault: '#E25837',
	colorByDefault: '#FFFFFF',
}
export const SUCCESS_TOAST = {
	titleByDefault: 'Success Toast Example',
	typeByDefault: 'success',
	iconByDefault: successIcon,
	closeIconByDefault: closeIcon,
	backgroundColorByDefault: '#37E29A',
	colorByDefault: '#FFFFFF',
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
		width: '280px',
		height: '55px',
		padding: '10px',
		fontSize: '16px',
		widthClose: '15px',
		widthSvg: '35px',
	},
	['medium']: {
		width: '320px',
		height: '65px',
		padding: '15px',
		fontSize: '18px',
		widthClose: '20px',
		widthSvg: '45px',
	},
	['large']: {
		width: '380px',
		height: '75px',
		padding: '20px',
		fontSize: '20px',
		widthClose: '25px',
		widthSvg: '55px',
	},
}
