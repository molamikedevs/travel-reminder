import { useState, useEffect } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import ParkingList from './components/ParkingList'
import Stats from './components/Stats'

const initialItems = JSON.parse(localStorage.getItem('items')) || []

export default function App() {
	const [items, setItems] = useState(initialItems)

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
		const confirmed = window.confirm('Are you sure you want to clear the list')
		if (confirmed) setItems([])
	}

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items))
	}, [items])

	useEffect(() => {
		const storedItems = localStorage.getItem('items')
		if (storedItems) {
			setItems(JSON.parse(storedItems))
		}
	}, [])
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
