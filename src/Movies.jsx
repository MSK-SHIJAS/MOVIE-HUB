import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'

const Movies = () => {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])

    let handleChange = (event) => {
        setTitle(event.target.value)
    }

    let handleSubmit = async () => {
        let response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
        console.log(response.data.Search);
        setMovies(response.data.Search)
    }

    return (
        <>
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center vh-100">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8 w-60">
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Search for movies..."
                        style={{ backgroundColor: 'white' }}
                        />
                </div>
                <div className="col-md-4">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-danger w-100"
                        >
                        Search
                    </button>
                </div>
            </div>
            </div>
            <div className="row bg-dark">
                {movies.map((item, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <Link to={`/detail/${item.imdbID}`}>
                            <img src={item.Poster} alt="" className="img-fluid justify-content-center " />
                        </Link>
                        <h2 className='ms-5 mt-2' style={{color:'white'}}>{item.imdbID}</h2>
                    </div>
                ))}
            </div>
                </>
      
    )
}

export default Movies
