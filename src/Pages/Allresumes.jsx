import React, { useEffect, useState } from 'react'
import { allResumeAPI, deleteAPI } from '../services/allAPI'
import { FaBackward, FaForward, FaSearch, FaTrash } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Allresumes() {

    const [allResume, setAllresume] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [dummyResumes, setDummyResume] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const rowsPerPage = 4

    const lastIndexOfCurrentPage = currentPage * rowsPerPage
    const firstIndexOfCurrentPage = lastIndexOfCurrentPage - rowsPerPage

    const currentResume = allResume.slice(
        firstIndexOfCurrentPage,
        lastIndexOfCurrentPage
    )

    const total = Math.ceil(allResume.length / rowsPerPage)

    useEffect(() => {
        getAllresume()
    }, [])

    useEffect(() => {
        const result = dummyResumes.filter(item =>
            item.job.toLowerCase().includes(searchKey.toLowerCase())
        )

        setAllresume(result)
        setCurrentPage(1)
    }, [searchKey, dummyResumes])

    const getAllresume = async () => {
        const response = await allResumeAPI()

        if (response.status === 200) {
            setAllresume(response.data)
            setDummyResume(response.data)
        }
    }

    const removeResume = async (id) => {

        if (confirm("ARE YOU SURE ???")) {

            const response = await deleteAPI(id)

            if (response.status === 200) {
                getAllresume()
                toast.success("Resume Deleted Successfully!")
            }
        }
    }

    return (
        <>
            <div>
                <div className="my-5 container d-flex justify-content-center align-items-center flex-column">

                    <h1>All Saved Resumes</h1>

                    <p
                        style={{ textAlign: 'justify' }}
                        className="my-5"
                    >
                        All resumes submitted to the platform in one place,
                        allowing administrators or recruiters to efficiently
                        view, search, filter, and manage candidate profiles.
                        It provides a quick overview of available candidates
                        and their key details, making the recruitment and
                        candidate-selection process more organized and efficient.
                    </p>

                    <div className="d-flex justify-content-center align-items-center w-50">

                        <input
                            value={searchKey}
                            onChange={e => {
                                setSearchKey(e.target.value)
                                setCurrentPage(1)
                            }}
                            type="text"
                            placeholder="Search Candidate by their Job roles"
                            className="form-control"
                        />

                        <FaSearch style={{ marginLeft: '-30px' }} />

                    </div>

                    <table className="my-5 table table-hover table-striped">

                        <thead>
                            <tr className="table-dark">
                                <th>#</th>
                                <th>Resume</th>
                                <th>Job Roles</th>
                                <th>.....</th>
                            </tr>
                        </thead>

                        <tbody>

                            {currentResume.length > 0 ?

                                currentResume.map((resume, index) => (

                                    <tr key={resume.id}>

                                        <td>{firstIndexOfCurrentPage + index + 1}</td>

                                        <td>
                                            <Link to={`/view/${resume?.id}`}>
                                                {resume.fullName.toUpperCase()}
                                            </Link>
                                        </td>

                                        <td>
                                            {resume.job.toUpperCase()}
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => removeResume(resume?.id)}
                                                className="btn text-danger"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>
                                    <td colSpan="4">
                                        <p>NO RESUME ADDED</p>
                                    </td>
                                </tr>

                            }

                        </tbody>

                    </table>

                    <div className="d-flex align-items-center">

                        <button
                            className="btn"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaBackward />
                        </button>

                        <span className="mx-3">
                            {currentPage} of {total}
                        </span>

                        <button
                            className="btn"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === total || total === 0}
                        >
                            <FaForward />
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Allresumes