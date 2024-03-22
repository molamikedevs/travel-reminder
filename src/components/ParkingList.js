import { useState } from 'react'
import Items from './Items'

const ParkingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
	const [sortby, setSortBy] = useState('input')

	let sortedItems

	if (sortby === 'input') sortedItems = items

	if (sortby === 'description')
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description))

	if (sortby === 'packed')
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed))

	return (
		<div className="list">
			<ul>
				{sortedItems.map(item => (
					<Items
						key={item.id}
						item={item}
						items={items}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortby} onChange={e => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description order</option>
					<option value="packed">Sort by packed order</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	)
}

export default ParkingList
