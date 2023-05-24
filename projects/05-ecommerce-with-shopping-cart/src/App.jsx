import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Products } from './components/Products'

function App () {
	const { filterProducts, setFilters } = useFilters()
	const filteredProducts = filterProducts(initialProducts)

	return (
		<>
			<Header setFilters={setFilters} />
			<Products products={filteredProducts} />
		</>
	)
}

export default App