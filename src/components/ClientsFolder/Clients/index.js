import React, { useState, useEffect } from 'react';

import Add from '@material-ui/icons/Add';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import SearchClient from '../SearchClient';
import ClientList from '../ClientList';

const clients = [
    { name: 'pelitos' },
    { name: 'roke' },
    { name: 'perritos' },
    { name: 'cieguito' },
    { name: 'matafuegos mar del plata' },
    { name: 'chill out' },
];

function Clients(props) {
    const [search, setSearch] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);

    useEffect(() => {
        setFilteredClients(
            clients.filter(
                element => element.name.toLowerCase().indexOf(search) !== -1
            )
        );
    }, [search]);

    return (
        <>
            <SearchClient search={search} setSearch={setSearch} />
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
