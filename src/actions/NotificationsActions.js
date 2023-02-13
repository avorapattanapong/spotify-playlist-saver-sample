export const NotificationsActionsTypes = {
  ENQUEUE_SNACKBAR: 'ENQUEUE_SNACKBAR',
  CLOSE_SNACKBAR: 'CLOSE_SNACKBAR',
  REMOVE_SNACKBAR: 'REMOVE_SNACKBAR'
}

export const enqueueSnackbar = (notification) => {
  const key = notification.options && notification.options.key

  return {
    type: NotificationsActionsTypes.ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random()
    }
  }
}

export const closeSnackbar = (key) => ({
  type: NotificationsActionsTypes.CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key
})

export const removeSnackbar = (key) => ({
  type: NotificationsActionsTypes.REMOVE_SNACKBAR,
  key
})
