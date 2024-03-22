const Stats = ({ items }) => {
	if (!items.length)
		return (
			<footer className="stats">
				<em>
					<p>You're now ready to park you luggage 👜</p>
				</em>
			</footer>
		)
	const numItems = items.length
	const packedItems = items.filter(item => item.packed).length
	const percentage = Math.round((packedItems / numItems) * 100)
	return (
		<footer className="stats">
			{percentage === 1000 ? (
				<em>You have got everything! Ready to go</em>
			) : (
				<em>
					You have {numItems} items on your list, and you've already packed{' '}
					{packedItems} ({percentage}%)
				</em>
			)}
		</footer>
	)
}

export default Stats
