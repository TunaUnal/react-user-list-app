import React from 'react'

function Info({info}) {
  return (
    <div className="row">
        <div className="col-12 text-center">
            <p>{info}</p>
        </div>
    </div>
  )
}

export default Info