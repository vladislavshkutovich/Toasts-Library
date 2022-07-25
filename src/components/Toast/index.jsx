import React from 'react'
import ToastLayout from '@/layouts/ToastLayout'
import ToastIcon from '@/components/ToastIcon'
import ToastMessage from '@/components/ToastMessage'
import ToastCloseButton from '@/components/ToastCloseButton'

export default TestToast = () => {
	return (
		<ToastLayout>
			<ToastIcon />
			<ToastMessage />
			<ToastCloseButton />
		</ToastLayout>
	)
}
