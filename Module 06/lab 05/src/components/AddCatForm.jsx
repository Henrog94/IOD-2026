import { useState } from 'react'

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('')
  const [latinName, setLatinName] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || !latinName.trim() || !image.trim()) {
      return
    }

    onAddCat({
      name: name.trim(),
      latinName: latinName.trim(),
      image: image.trim()
    })

    setName('')
    setLatinName('')
    setImage('')
  }

  return (
    <div className="componentBox">
      <h2>Add a Big Cat</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Tiger"
            />
          </label>
        </div>

        <div>
          <label>
            Latin Name:
            <input
              value={latinName}
              onChange={e => setLatinName(e.target.value)}
              placeholder="Panthera tigris"
            />
          </label>
        </div>

        <div>
          <label>
            Image URL:
            <input
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="https://..."
            />
          </label>
        </div>

        <button type="submit">Add Cat</button>
      </form>
    </div>
  )
}

export default AddCatForm
