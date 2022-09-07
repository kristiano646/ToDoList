import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Listar.css';

function Listar() {
    const [modalIsOpenCreate, setIsOpenC] = React.useState(false);
    const [modalIsOpenEdit, setIsOpenE] = React.useState(false);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(false);


    const remove = async (title) => {
        await fetch(`http://localhost:8081/to-do-list/DELETE/${title}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGroups = [...groups].filter(i => i.title !== title);
            setGroups(updatedGroups);
        });
    }
    const update = async (title,description,estado) => {
        await fetch(`http://localhost:8081/to-do-list/POST/${title}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'title':title,
                'description':description,
                'estado':estado,
            }
        }).then(() => {
            let updatedGroups = [...groups].filter(i => i.title !== title);
            setGroups(updatedGroups);
        });
    }

    const create = async (title,description,estado) => {
        await fetch(`http://localhost:8081/to-do-list/PUT`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'title':title,
                'description':description,
                'estado':estado,
            }
        }).then(() => {
            let updatedGroups = [...groups].filter(i => i.title !== title);
            setGroups(updatedGroups);
        });
    }



    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:8081/to-do-list')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGroups(data);
                setLoading(false);
            })
    }, []);


    return (
        <>
            <Modal isOpen={modalIsOpenCreate} onRequestClose={() => setIsOpenC(false)}>
                <form onSubmit={()=>this.create()} method="post" >
                    <label>Titulo:</label>
                    <input className='form-control mr-sm-2' type="text" placeholder="Titulo" aria-label="text" name="title" />
                    <label>Descripción:</label>
                    <input className='form-control mr-sm-2' type="text" placeholder="Descripcion" aria-label="text" name="Descripcion" />
                    <label>Estado:</label>
                    <select className='form-select form-select-lg mb-3' aria-label=".form-select-lg example" name="estado" >
                        <option value="Done">Done</option>
                        <option value="Incomplete">Incomplete</option>
                    </select>
                    <button type='submit' onClick={() => setIsOpenC(false)}>Aceptar</button>
                    <button type='button' onClick={() => setIsOpenC(false)}>Cancelar</button>
                </form>
            </Modal>
            <Modal isOpen={modalIsOpenEdit} onRequestClose={() => setIsOpenE(false)}>
                <form onSubmit={()=>this.create()} method="post" >
                    <label>Titulo:</label>
                    <input className='form-control mr-sm-2' type="text" placeholder="Titulo" aria-label="text" name="title" />
                    <label>Descripción:</label>
                    <input className='form-control mr-sm-2' type="text" placeholder="Descripcion" aria-label="text" name="Descripcion" />
                    <label>Estado:</label>
                    <select className='form-select form-select-lg mb-3' aria-label=".form-select-lg example" name="estado" >
                        <option value="Done">Done</option>
                        <option value="Incomplete">Incomplete</option>
                    </select>
                    <button type='submit' onClick={() => setIsOpenE(false)}>Aceptar</button>
                    <button type='button' onClick={() => setIsOpenE(false)}>Cancelar</button>
                </form>
            </Modal>
            <div className='container'>
                <h1 className='neon'>•.ToDoList.•</h1>
                <p className='neon3'>
                    <span className='flicker1'>♣</span>
                    <span className='flicker2'>♣</span>
                    <span className='flicker3'>♣</span>
                </p>
            </div>

            <form className='form-inlin my-2 my-lg-0'>

                <input className='form-control mr-sm-2' type="search" placeholder="Buscar" aria-label="Search" name="search" />
                <button className='btn btn-danger my-2 my-sm-0' type="submit">Buscar</button>
            </form>


            <div id="table" className='table-editable'>
                <span className='table-add glyphicon glyphicon-plus'></span>
                <table className='table'>

                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>

                    {groups.map(tdl =>
                        <tr key={tdl.title}>

                            <>
                                <td>{tdl.title} </td>
                                <td>{tdl.description}</td>
                                <td>
                                    <select className='form-select form-select-lg mb-3' aria-label=".form-select-lg example" name="estado" >
                                        <option select value={tdl.estado}>{tdl.estado}</option>
                                        <option value="Done">Done</option>
                                        <option value="Incomplete">Incomplete</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='espacio'>
                                        <button onClick={() => setIsOpenC(true)}>+<i className='icon-plus-sign-alt'></i></button>
                                        <button onClick={() => setIsOpenE(true)}>d<i className='icon-bitbucket'></i></button>
                                        <button onClick={() => this.remove(this, tdl.title)}>e<i className='icon-edit'></i></button>
                                     
                                    </div>
                                </td>
                            </>
                        </tr>
                    )}


                </table>
            </div>

            


        </>

    )
}

export default Listar;