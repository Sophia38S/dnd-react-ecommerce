
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css';

function ProductList({ search, products }) {
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={product.price}
          category={product.category}
          image={product.thumbnail}
        />
      ))}
    </section>
  )
}

export default ProductList