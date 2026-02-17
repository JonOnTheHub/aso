"use client"

import Trending from '@/components/Trending'
import React, { useState } from 'react'
import outfits from "@/data";
import Search from '@/components/Search';

const ExplorePage = () => {
    const [query, setQuery] = useState("")

    const search = query.trim().toLowerCase()
    const searchResults = outfits.filter(outfit => (outfit.title.toLowerCase().includes(search) || outfit.keywords.some(keyword => keyword.toLowerCase().includes(search))))
    return (
        <div className='px-8'>
            <Search query={query} setQuery={setQuery} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {searchResults.map((outfit) => (
                    <Trending
                        key={outfit.id}
                        outfit={outfit}
                    />
                ))}
            </div>
        </div>


    )
}

export default ExplorePage