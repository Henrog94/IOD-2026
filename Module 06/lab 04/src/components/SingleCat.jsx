function SingleCat({ name, latinName, image }) {
  return (
    <div className="catCard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><em>{latinName}</em></p>
    </div>
  )
}

export default SingleCat
