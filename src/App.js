import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import ParkingList from './components/ParkingList'
import Stats from './components/Stats'

// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: false },
// 	{ id: 3, description: 'Paste', quantity: 1, packed: true },
// ]

export default function App() {
	const [items, setItems] = useState([])

	const handleAddItems = item => {
		setItems(items => [...items, item])
	}

	const handleDeleteItem = id => {
		setItems(items => items.filter(item => item.id !== id))
	}

	const handleToggleItem = id => {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		)
	}

	const handleClearList = () => {
		const confirmed = window.confirm(
			'Are you sure you want to clear list items?'
		)
		if (confirmed) setItems([])
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItems} />
			<ParkingList
				key={items}
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	)
}
