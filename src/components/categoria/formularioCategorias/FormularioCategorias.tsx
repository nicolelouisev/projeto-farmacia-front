import {useState, useEffect, ChangeEvent} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {buscar, atualizar, cadastrar} from "../../../service/Service";
import Categoria from "../../../models/Categoria";

function FormularioCategorias() {
    const [categorias, setCategorias] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();

    const {id} = useParams<{id: string}>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategorias, {
            headers: {},
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        });

        console.log(JSON.stringify(categorias));
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categorias, setCategorias, {
                    headers: {},
                });

                alert("Categoria atualizado com sucesso");
                retornar();
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    alert("O token expirou, favor logar novamente");
                } else {
                    alert("Erro ao atualizar o Categoria");
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categorias, setCategorias, {
                    headers: {},
                });

                alert("Categoria cadastrado com sucesso");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    alert("O token expirou, favor logar novamente");
                } else {
                    alert("Erro ao cadastrado o Categoria");
                }
            }
        }

        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">{id === undefined ? "Cadastre um novo categoria" : "Editar categoria"}</h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Nome da categoria</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block" type="submit">
                    {id === undefined ? "Cadastrar" : "Editar"}
                </button>
            </form>
        </div>
    );
}

export default FormularioCategorias;
