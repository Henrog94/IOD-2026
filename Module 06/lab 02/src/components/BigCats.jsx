import SingleCat from './SingleCat'

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://placecats.com/300/200' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://placecats.com/301/200' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://placecats.com/302/200' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://placecats.com/303/200' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://placecats.com/304/200' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://placecats.com/305/200' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://placecats.com/306/200' }
]

function BigCats() {
  return (
    <div className="componentBox">
      <h2>Big Cats</h2>
      <div className="catGrid">
        {cats.map(cat => (
          <SingleCat key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  )
}

export default BigCats
