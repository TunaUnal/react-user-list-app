import React from 'react'

function Page({ setPage, page, maxPage }) {
    return (
        <div className="row mt-3">
            <div className="col d-flex justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" disabled={page == 1} onClick={() => setPage(page - 1)}>Previous</button>
                    <button type="button" className="btn btn-success">{page}</button>
                    <button type="button" className="btn btn-primary" disabled={page == maxPage} onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Page