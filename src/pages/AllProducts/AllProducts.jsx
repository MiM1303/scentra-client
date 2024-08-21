import { useLoaderData } from "react-router-dom";
import {  useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";

const AllProducts = () => {
    const allPerfumes = useLoaderData();
    const [sort, setSort] = useState('');
    const [searchText, setSearchText] = useState('');

    
    
    return (
        <div>
            <h2 className="border-b-4 w-fit mx-auto rounded-2xl p-4 border-[#EBB22F] text-center lg:text-4xl text-2xl mt-20 font-semibold text-[#442537]">Available Products</h2>
            <p className="text-center mt-5 lg:text-xl">Check out all the available perfumes!</p>

            <div className="flex gap-10 mt-10 ml-20 justify-center">
                {/* Search */}
                <div className="w-1/4 flex flex-row gap-5">
                    {/* <form onSubmit={handleSearch}> */}
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <input onInput={ e =>{
                                    // console.log(e.target.value);
                                    setSearchText(e.target.value);
                                }} type="text" name="search" className="grow" placeholder="Search food by name" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>

                        <div className="form-control">
                            <Link to={`/available-foods/search/${searchText}`}><button className="btn bg-[#cb946a] button-styles  text-lg text-white">search</button></Link>
                        </div>
                    {/* </form> */}
                </div>
                {/* Sort */}
                <div className="w-1/3 flex gap-3">
                    <select onChange={e => {
                                console.log(e.target.value);
                                setSort(e.target.value)
                            }} 
                    value={sort} name="sort" id="sort" className="select select-bordered w-full max-w-xs">
                        {/* <option selected  disabled >Sort By Expiry Date</option> */}
                        <option  value='asc'>Ascending</option>
                        <option value='dsc'>Descending</option>
                    </select>
                    <Link to={`/available-foods/sorted/${sort}`}><button className="btn bg-[#cb946a] text-sm lg:text-base button-styles">Sort</button></Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
                {
                    allPerfumes.map(product=><ProductCard
                        key={product._id}
                        product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;