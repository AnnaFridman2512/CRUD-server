import React, {useState} from 'react';



export const CartContext = React.createContext({
    cartItems: [],//Before fetching the array is empty 
    addToCart: () => {},
});


export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState({});//This useState was cut from Cart so we can use it in onAddToCart function
                                                   //"cartitems" is an object . It's keys are the objects idies 
                                                   //its values are the quantity of each id (how many of the same id we added to cart)
    const addToCart = id =>{//Is the id that we passed in Product component in
                            //<button onClick={() => onAddToCart(id)}>Add to cart ${price}</button>
    const currentQuentity = cartItems[id] ??  0;  //?? checkes if  cartitems[id] value is undefined or NULL (checks if we already have this id in the cart cuz if we don't have it we won't be able to add to its quantity) 
                                                  //if its not undefined or NULL it takes the value (that can be 1/2/3 depends on the value in the idies quantity)
                                                  //and if its undefined or NULL it takes 0 instead
                          
    setCartItems({...cartItems, [id]: currentQuentity+1}); //Take all the cartitems that already exist in the cart
                                                            //and in the spesific id (the id that is in [id] place)add 1 to the value that is in its "currentQuentity"
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart
        }}>
            {children}    
        </CartContext.Provider>
       
    );
    }    
