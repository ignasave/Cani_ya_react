import React from 'react';

import Add from '@material-ui/icons/Add';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import ClientList from '../ClientList';
import useSearch from '../../../Utils/searchHook';
import SearchComponent from '../../../sharedComponents/SearchComponent';

const clients = [
    { name: 'pelitos' },
    { name: 'roke' },
    { name: 'perritos' },
    { name: 'cieguito' },
    { name: 'matafuegos mar del plata' },
    { name: 'chill out' },
];

function Clients(props) {

    const [ filteredClients, setSearch ] = useSearch(clients);

    return (
        <>
            <SearchComponent
                title="cliente"
                setSearch={ setSearch }
                flex
            />
            <ClientList clients={filteredClients} />
            <FloatingActionButton
                icon={<Add />}
                aria='Add a client'
                tooltip='Add a new Client'
                clickHandler={() => {}}
            />
        </>
    );
}

export default Clients;