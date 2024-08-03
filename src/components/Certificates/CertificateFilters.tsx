import React from 'react'

interface CertificateFiltersProps {
    selectedCategory: string | null
    onSelectCategory: (category: string | null) => void
}

const CertificateFilters: React.FC<CertificateFiltersProps> = ({ selectedCategory, onSelectCategory }) => {
    const categories = [
        'All',
        'Design',
        'JavaScript',
        'Front-End',
        'Python',
        'Databases',
        'Scrum',
        'Cloud Computing'
    ]

    return (
        <div className="flex justify-center flex-wrap mb-8 space-x-2 space-y-2">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category === 'All' ? null : category)}
                    className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === category || (category === 'All' && selectedCategory === null) ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CertificateFilters
