

export default function Cart({items, products}){//"items" is a prop from App.js
                                                //it's an object with keys that are the id and quantity as the idies values
                                                //"products" is a prop from App.js
    

    return (
        <>
    
            Cart: {Object.entries(items).map(([id, quantity])=> //*Object.entries takes an object and returns am array with  key:value pairs arrays [[key:value], [key:value]] 
              `Product id ${id}: quantity ${quantity} |`
            )} 
      
        </>
    );
}