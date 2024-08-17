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
        })
    }, [searchLoad])


    // PAGINATION MATHS

    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    console.log(count, numberOfPages);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);
    
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
            

            </div>

            {/* ALL PRODUCTS DATA */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 lg:p-10'>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {/* PAGINATION */}
            <div className="px-2 md:px-10 py-6 pagination text-center ">
                <button onClick={handlePrevPage} className="join-item btn btn-outline mr-8 align-middle"><IoIosArrowBack /></button>
                {
                    pages.map(page=> <button
                                        onClick={()=>setCurrentPage(page)} 
                                        className={`align-middle btn btn-outline hover:bg-[#EDFAF6] hover:text-black mr-4 ${currentPage === page? 'bg-[#98FBDD] text-black': ''}`} 
                                        key={page}>
                                            {page}
                                    </button>)
                }
                <button onClick={handleNextPage} className="ml-4 join-item btn btn-outline align-middle"><IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default ProductsPagination;