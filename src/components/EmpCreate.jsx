import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmpCreate = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(true);

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, email, phone, active };

        fetch("http://localhost:8000/employee",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empdata)
            }).then((resp) => {
                setSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }).catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form className="container" onSubmit={handlesubmit}>
                    {
                        success &&
                        <div class="alert alert-success" role="alert">
                            Cadastro feito com sucesso!
                        </div>
                    }
                    <div className="card border-white">
                        <div className="card-title">
                            <h2>Cadastrar Funcionário </h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group col-md-12 mb-3 d-none">
                                <label>ID</label>
                                <input value={id} disabled="disabled" className="form-control"></input>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label>Nome</label>
                                <input value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label>Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label>Telefone</label>
                                <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">Está ativo?</label>
                                <input checked={active} onChange={e => setActive(e.target.checked)} className="form-check-input" type="checkbox"></input>
                            </div>
                            <div className="form-group col-md-12">
                                <button type="submit" className="btn btn-success me-3">Salvar</button>
                                <Link to="/" className="btn btn-danger">Voltar</Link>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmpCreate;
