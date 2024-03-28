const Nevbar = () => {
    return (
        <div>
            <div className="h-24 w-full bg-violet-400 p-10 flex justify-between items-center fixed bg-opacity-30 z-10">
                <h1 className="font-extrabold text-3xl text-purple-800 italic ml-24">OnePiece<span className="text-white">.com</span></h1>
                <a className="text-white font-bold ml-56" href="/home">Home</a>
                <a className="text-white font-bold" href="/meat">Meats</a>
                <a className="text-white font-bold" href="/fishes">Fishes</a>
                <a className="text-white font-bold" href="/vegetable">Vegetables</a>
                <a className="text-white font-bold" href="/rice">Rice</a>
                <a className="text-white font-bold" href="/addPost">AddPost</a>
                <a className="btn bg-purple-200 text-black" href="/signUp">SignIn/SignUp</a>
            </div>
        </div>
    );
};

export default Nevbar;