import { useState } from 'react'

const Form = ({ onAddItem }) => {
	const [description, setDescription] = useState('')
	const [quantity, setQuantity] = useState(1)

	const handleSubmit = e => {
		e.preventDefault()
		if (!description) return

		const newItem = { description, quantity, packed: false, id: Date.now() }
		onAddItem(newItem)
		setDescription('')
		setQuantity(1)
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for you trip?👜</h3>
			<select
				onChange={e => setQuantity(Number(e.target.value))}
				value={quantity}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				onChange={e => setDescription(e.target.value)}
				value={description}
				type="text"
				placeholder="Items..."
			/>
			<button>Add</button>
		</form>
	)
}
export default Form
