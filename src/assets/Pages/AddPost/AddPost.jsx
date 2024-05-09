import Nevbar from "../../Shared/Nevbar/Nevbar";

const AddPost = () => {
   
    const handleAddSellPost = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.imgURL.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const priceKilo = form.priceKilo.value;
        const mobile = form.mobile.value;
        const date = form.date.value;
        const addSellPost = {
            title,
            image,
            price,
            date,
            details,
            priceKilo,
            mobile,
            category

        }
        console.log(addSellPost);
        fetch('https://onepiece-server.up.railway.app/addSellPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSellPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        form.reset();

    }
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="pt-24">
            <h1 className="text-2xl text-center mt-5  text-yellow-500 font-bold underline">Please add your new service here: </h1>
            <form onSubmit={handleAddSellPost} className=" p-10 my-10 bg-blue-800 mx-10 text-white">


                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
                    <input type="text" name="title" placeholder='Enter Your Service/Product name/Title' className='input input-ghost input-bordered ' required />

                    <input type="text" name="price" placeholder='Enter Your Product price (Per Piece)' className='input input-ghost input-bordered' />

                    <input type="text" name="priceKilo" placeholder='Enter Your Product price (Per Kilo Piece)' className='input input-ghost input-bordered' required />

                    <div>
                        <label>Select Category:</label>
                        <select id="category" name="category" className='px-5 py-2 ml-3 border'>
                            <option value="meets">meets</option>
                            <option value="fishes">fishes</option>
                            <option value="vegetables">vegetables</option>
                            <option value="rice">rice</option>
                        </select>
                    </div>



                    <input type="text" name="imgURL" placeholder='Enter Your product image URL link' className='input input-ghost input-bordered ' required />

                    <input type="text" name="mobile" placeholder='Enter Your mobile number' className='input input-ghost input-bordered ' required />

                    <input type="date" name="date" placeholder='date' className='input input-ghost input-bordered text-white' />

                </div>
                <textarea name='details' className="textarea input input-ghost input-bordered w-full my-5 h-56" placeholder="Enter Your service details" required></textarea>
                <div className='text-center my-5'>
                    <button type="submit" className="btn btn-warning px-10">Submit</button>
                </div>

            </form>
        </div>
        </div>
    );
};

export default AddPost;

