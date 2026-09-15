function SingleCat({ id, name, latinName, image, onDelete }) {
  return (
    <div className="catCard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><em>{latinName}</em></p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default SingleCat
