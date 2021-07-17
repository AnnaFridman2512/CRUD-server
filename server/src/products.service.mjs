import loadJson from 'load-json-file';

export let products = loadJson.sync('./data/products.json'); //Saving the data  from the wanted file to a variable 

export function getProducts() {
    return products;
}
export function getProduct(id){
    const [ product ] = products.filter(product => product.id == id);
    return product;
}
export function addProduct(product){
    products.push(product);
}

export function deleteProduct(id){
    products = products.filter(product => product.id != id);//"products" is an array so we filter it by id. 
}

export function editProduct(id, newProduct){
    let [product]= products.filter(product => product.id == id);//"products" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
    product.title = newProduct.title, 
    product.category = newProduct.category,
    product.price = newProduct.price;
    product.description = newProduct.description,
    product.image = newProduct.image
}

export function getProductsByUserId(userId){
    return products.filter(product => product.userId == userId);
}