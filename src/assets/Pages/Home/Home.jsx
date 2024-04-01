import Nevbar from "../../Shared/Nevbar/Nevbar";
import TopSell from "../Services/TopSell";
const Home = () => {
    return (
        <div>
            <Nevbar></Nevbar>
            <h1 className="text-xl font-bold text-black mb-5 ml-10 pt-32">Top Selling Menu:</h1>
            <TopSell></TopSell>

        </div>
    );
};

export default Home;