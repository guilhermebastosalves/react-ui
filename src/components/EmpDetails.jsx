import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmpDetails = () => {

    const { id } = useParams();

    const [empData, setEmpData] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                {empData &&
                    <div>
                        <div class="card-header">
                            <h2>Funcionário: <b>{empData.name}</b></h2>
                            <h5>ID: <b>{empData.id}</b></h5>
                        </div>
                        <div className="card-body">
                            <h3 className="mb-3">Informações para contato</h3>
                            <h5 className="mb-3">Email: {empData.email}</h5>
                            <h5 className="mb-3">Fone: {empData.phone}</h5>
                            {
                                empData.active ?
                                    <h5 className="mb-3 text-primary">Ativo</h5> :
                                    <h5 className="mb-3 text-primary">Inativo</h5>
                            }
                            <Link className="btn btn-danger" to="/">Voltar</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default EmpDetails;