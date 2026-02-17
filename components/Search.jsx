    
import React from 'react'
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const Search = ({ query, setQuery }) => {
    return (
        <div className='my-8'>
            <Field >
                <FieldLabel htmlFor="input-search" className="text-lg font-semibold">Search</FieldLabel>
                <Input
                    id="input-search"
                    type="text"
                    placeholder="Find Your Style"
                    className="max-w-md"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </Field>
        </div>
    )
}

export default Search