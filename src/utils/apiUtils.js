const isErrorStatus = (status) => status >= 400 && status <= 599

const handleApiResult = (result) => {
  const { error, data, message, status } = result
  if (error || isErrorStatus(status)) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      status,
      message,
      details: data?.details ? data.details : null
    })
  }
  return Promise.resolve(data)
}

export default handleApiResult
