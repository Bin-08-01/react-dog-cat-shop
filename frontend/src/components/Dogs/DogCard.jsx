import "./dogs.css";
import {CartContext} from "../../Contexts/CartContext";
import {useContext, useState} from "react";
import cart from "../Cart/Cart";

const DogCard = (props)=>{
    let check = false;
    const {id, name, breed, price, description, imageUrl} = props;
    const {addToCart, total, setTotal} = useContext(CartContext);
    const [isAdded, setAdded] = useState(false);
    const handleClick = ()=>{
        setAdded(true);
        const newItem = {
            name: name,
            price: price,
            imageUrl: imageUrl,
        };
        addToCart((item)=>[...item, newItem]);
        setTotal((total)=> total+=Number.parseInt(price));
    }

    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img src={imageUrl} alt={`picture of ${name}`} className={"dog-img"}/>
                </div>
                <div className="dogs-desc">{description}</div>
                <div className="dogs-price">{price}</div>
                {isAdded ? (
                    <button disabled className={"dogs-btn-disabled"}>Selected</button>
                ) : (
                    <button className={"dogs-btn"} onClick={handleClick}>Add to cart</button>
                )}
            </section>
        </>
    )
}

export default DogCard;