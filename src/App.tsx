import CategoryPills from './component/CategoryPills'
import './index.css'
import { PageHeader } from './layouts/PageHeader'
import { categories } from './data/home'
import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className='grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto'>
        <div>Sidebar</div>
        <div className='overflow-x-hidden'>
          <div className='sticky top-0 bg-white z-10 pb-4 px-8'>
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
