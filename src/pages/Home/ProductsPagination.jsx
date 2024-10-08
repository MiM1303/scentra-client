import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "../Shared/ProductCard";
import { useLoaderData } from "react-router-dom";

const ProductsPagination = () => {

    const productNum = useLoaderData();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [count, setCount] = useState(productNum.count)
    
    const [searchLoad, setSearchLoad] = useState(0);

    const itemsPerPage = 6;
    let numberOfPages = Math.ceil(count / itemsPerPage);
    
    console.log(count, numberOfPages);

    let pages = [...Array(numberOfPages).keys()];
    
    console.log(pages);
    

    // LOADING DATA
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products?page=${currentPage}&size=${itemsPerPage}&search=${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setLoading(false);
            
        })
    }, [currentPage, searchLoad])

    // LOADING DATA COUNT
    useEffect(()=>{
        fetch(`https://localhost:5000/all-products-count?search=${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log("before setting", data, count);
            setCount(data.count);
            setLoading(false);
            // console.log(count);

            
            numberOfPages = Math.ceil(count / itemsPerPage);
            pages = [...Array(numberOfPages).keys()];
        })
    }, [searchLoad, searchText])


    // PAGINATION MATHS

    // const itemsPerPage = 6;
    // const numberOfPages = Math.ceil(count / itemsPerPage);
    // console.log(count, numberOfPages);

    // const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);
    
    const handlePrevPage = () =>{
        if(currentPage>0){
            setCurrentPage(currentPage-1);
        }
    }

    const handleNextPage = () =>{
        if(currentPage < pages.length-1){
            setCurrentPage(currentPage+1);
        }
    }

    // SEARCH BY NAME HANDLING
    const handleSearch = e => {
        e.preventDefault()
    
        setSearchText(searchText)
      }
    

    return (
        <div>
            {/* SEARCH BY TAGS */}
            <div className="w-1/4 flex flex-row gap-5 pl-0 lg:pl-16 md:mx-auto">
                    <form onSubmit={handleSearch} className="flex gap-1 mb-10 mx-auto">
                        <div className="form-control">
                            <label className="input input-bordered w-fit flex items-center gap-4">
                                <input onChange={ e =>{
                                                    setSearchText(e.target.value);
                                                    // console.log(e.target.value);
                                                }} 
                                        type="text" 
                                        name="search" 
                                        className="grow" 
                                        placeholder="Search products by tags" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>

                        <div className="form-control">
                            {/* <Link to={`/all-products?page=${currentPage}&size=${itemsPerPage}/search/${searchText}`}><button className="btn bg-[#b6f8e4] text-black hover:bg-[#98fbdd] ">Search</button></Link> */}
                            <button onClick={()=>{setSearchLoad(searchLoad+1)}} className="btn bg-[#b6f8e4] px-2 w-fit text-black hover:bg-[#98fbdd] ">Search</button>
                        </div>
                    </form>


            </div>

            {/* ALL PRODUCTS DATA */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 lg:p-10'>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {/* PAGINATION */}
            <div className="px-2 md:px-10 py-6 pagination text-center ">
                <button onClick={handlePrevPage} className="p-2 lg:p-4 border rounded-xl border-1 border-[#AD795B] join-item btn btn-outline mr-8 align-middle"><IoIosArrowBack /></button>
                {
                    pages.map(page=> <button
                                        onClick={()=>setCurrentPage(page)} 
                                        className={`p-2 lg:p-4 border rounded-xl border-1 border-[#AD795B] align-middle hover:bg-[#EDFAF6] hover:text-black mr-4 ${currentPage === page? 'bg-[#98FBDD] text-black': ''}`} 
                                        key={page}>
                                            {page}
                                    </button>)
                }
                <button onClick={handleNextPage} className="p-2 lg:p-4 border rounded-xl border-1 border-[#AD795B] ml-4 join-item btn btn-outline align-middle"><IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default ProductsPagination;