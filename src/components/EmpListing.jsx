import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {

    const [empData, setEmpData] = useState(null);
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);

    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }

    const RemoveFunction = (id) => {

        if (window.confirm("Quer excluir?")) {

            fetch("http://localhost:8000/employee/" + id,
                {
                    method: "DELETE"
                }).then((resp) => {
                    //alert("excluído");
                    setSuccess(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }).catch((err) => {
                    console.log(err.message);
                })
        }
    }

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }

    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <>
            <div className="container">
                {
                    success &&
                    <div class="alert alert-danger" role="alert">
                        Excluído com sucesso!
                    </div>
                }
                <div className="card border-white">
                    <div className="card-title">
                        <h2 className="text-center'">Lista de Funcionários</h2>
                    </div>
                    <div className="card-body">
                        <div>
                            <Link to="employee/create" className="btn btn-success mb-2">Adicionar (+)</Link>
                        </div>
                        <table className="table table-striped table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empData &&
                                    empData.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a onClick={() => { LoadEdit(item.id) }} className="btn btn-warning me-3">Editar</a>
                                                <a onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger me-3">Excluir</a>
                                                <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Detalhes</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )

}

export default EmpListing;
