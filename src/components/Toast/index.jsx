import React from 'react'

// import { ToastLayout } from '@/layouts/ToastLayout'
// import { ToastIcon } from '@/components/ToastIcon'
// import { ToastMessage } from '@/components/ToastMessage'
// import { ToastCloseButton } from '@/components/ToastCloseButton'

import { ToastLayout } from '../../layouts/ToastLayout'
import { ToastIcon } from '../ToastIcon'
import { ToastMessage } from '../ToastMessage'
import { ToastCloseButton } from '../ToastCloseButton'

export const Toast = () => {
	return (
		<ToastLayout>
			<ToastIcon />
			<ToastMessage />
			<ToastCloseButton />
		</ToastLayout>
	)
}
