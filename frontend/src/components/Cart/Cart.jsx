import {CartContext} from "../../Contexts/CartContext";
import {useContext} from "react";
import "./cart.css";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {myCart, total, setTotal, addToCart} = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () =>{
        setTotal(0);
        addToCart([{}]);
        setTimeout(()=>{navigate("/dogs")}, 10000);
    }
    const handleHome = () =>{
        navigate("/");
    }
    return (
        <>
            <section className={"cart-container"}>
                <div className="cart-header">Check out:</div>
                <div className="cart-items">
                    {myCart.slice(1).map((item)=>{
                        return(
                            <div className={"cart-item"}>
                                <img src={`${item.imageUrl}`} className={"cart-item-img"} alt={`Picture of ${item.name}`}/>
                                {item.name}:{item.price}
                            </div>
                        )
                    })}
                    <div className="cart-total">
                        Total: {total}
                    </div>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}>Done</button>
                <button className="cart-gohome" onClick={handleHome}>Return Home</button>
            </section>
        </>
    )
}

export default Cart;