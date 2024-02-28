import "./Home.css";
import homeLogo from "../../assets/home.jpg";

function Home() {
    return (
        <>
            <div className="bg-teal-700 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Bem vindo!</h2>
                        <p className="text-xl">Todos os medicamentos pelo melhor preço é aqui!</p>

                        <div className="flex justify-around gap-4">
                            <button className="rounded bg-white text-teal-950 py-2 px-4">Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className="w-2/3" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
