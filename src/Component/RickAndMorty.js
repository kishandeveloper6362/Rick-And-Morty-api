import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RickAndMorty = () => {

    const [data, setdata] = React.useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                console.log("Rick And Morty data ===>>>", res)
                setdata(res.data.results)
            })
            .catch((err) => {
                console.log("Rick And Morty data Error ===>>>", err)
            })
    }, [])

    return (
        <div>

    <div className='text-center p-5 font-size fw-bold rick'>Rick And Morty Api</div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        {data.map((el, i) => {
                            return (
                                <div className='col-sm-12 col-md-6 col-lg-6 mb-4' key={i}>
                                    <div className='card'>
                                        <div className="d-flex">
                                            <img src={el.image} className="card-img-top" alt="" style={{ width: '39%' }} />

                                            <div className='Detail'>
                                                <div id='set'>
                                                    <a href="#" id='Link_Rick'> {el.name}</a>
                                                    <p id='know'>{el.status
                                                    } - {el.species}</p>
                                                </div>
                                                <div id='set'>
                                                    <p id='seen'>Last Know Location:</p>
                                                    <a href="#" id='Link_Seen'>{el.location.name}</a>
                                                </div>
                                                <div id='set'>
                                                    <p id='seen'>First seen in:</p>
                                                    <a href="#" id='Link_Seen'>{el.origin.name}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RickAndMorty