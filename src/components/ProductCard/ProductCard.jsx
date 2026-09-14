import Button from '../Button/Button';
import './ProductCard.css'

function ProductCard({ name, price, category, image }) {
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{category}</p>
      <p>
        {price === 0 ? 'GRATIS' : `$${price.toLocaleString('es-CL')}`}
      </p>
      <Button>Ver más</Button>
    </article>
  )
}

export default ProductCard