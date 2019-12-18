import { useState, useEffect } from 'react';

const useSearch = items => {
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setFilteredItems(
            items.filter(
                element => element.name.toLowerCase().indexOf(search) !== -1
                )
            );
    }, [search]);

    return [filteredItems, setSearch]
};

export default useSearch;