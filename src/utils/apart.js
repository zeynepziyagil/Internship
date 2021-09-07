const apart = (products) => {
    const p = Math.ceil(products.length / 16);
    const apartProducts = Array.from({ length: p }, (_, index) => {
        const start = index * 16;
        return products.slice(start, start + 16);
    })
    return apartProducts;
}

export default apart