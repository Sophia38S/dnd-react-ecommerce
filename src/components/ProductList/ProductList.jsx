import products from '../../data/products'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css';

function ProductList() {
  return (
    <section>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
    </section>
  )
}

export default ProductList