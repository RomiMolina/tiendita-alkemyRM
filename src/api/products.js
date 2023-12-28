export default async function getAllProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const infoApi = data.products.map((p) => {
            const obj= {
                id: p.id,
                title: p.title,
                description: p.description,
                price: p.price,
                brand: p.brand,
                image: p.thumbnail,
                category: p.category
            }
            return obj
        })
        return infoApi
    } catch (error) {
        console.log('Error fetching products', error);
        throw error;
    }
}