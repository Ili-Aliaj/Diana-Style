function ProductCards(props) {
  return (
    <>
      <div className="product-card">
        <img src={props.imageSrc} alt={props.imgAlt} />
        <p> {props.porositTani}</p>
      </div>
    </>
  );
}

export default ProductCards;
