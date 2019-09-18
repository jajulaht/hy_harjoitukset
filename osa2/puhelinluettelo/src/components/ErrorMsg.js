import React from 'react'

const ErrorMsg = ({ errorMsg }) => {
  if (errorMsg === null) {
    return null
  }

  return (
    <div className="error">
      {errorMsg}
    </div>
  )
}

export default ErrorMsg