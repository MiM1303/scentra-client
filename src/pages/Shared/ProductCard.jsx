import { useLocation, useNavigate } from "react-router-dom";


const ProductCard = ({product}) => {
    const {_id, product_name, product_image, description, price, category, ratings, product_creation_date} = product;

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="card card-compact bg-[#fffaf9] shadow-xl">
            <figure>
                <img
                className="w-full"
                src={product_image}
                alt="Album" />
            </figure>
            <div className="card-body text-lg">
                <h2 className="card-title text-2xl font-bold">{product_name}</h2>
                <p><span className="font-bold text-lg">Category: </span>{category}</p>
                <p>{description}</p>
                <p><span className="font-bold text-lg">Price:</span> ${price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;