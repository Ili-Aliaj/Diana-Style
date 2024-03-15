function ProductCards(props) {
  return (
    <>
      <div className="product-card">
        <img className="product-image" src={props.imageSrc} alt={props.imgAlt} />
        <span> {props.porositTani}</span>
      </div>
    </>
  );
}

export default ProductCards;
