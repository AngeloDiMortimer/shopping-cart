const getShopData = async () => {
    try {
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    } catch (err) {
        console.log("Store data is currently not aviable", err);
    }
}

const products = await getShopData();

export default products;