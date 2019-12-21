import { useState, useEffect } from 'react';

const useForm = (props) => {
    const [ data, setData ] = useState(props);

    const { selectedDate, provider } = data;

    useEffect(() => {
        if(provider !== '') {
            const transformedDate = `${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`;
            setData({ ...data, date: transformedDate });
        }
    }, [selectedDate, provider]);

    return [ data, setData ];
}

export default useForm;