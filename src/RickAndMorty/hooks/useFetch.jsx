import { useState } from 'react';
import { getUrl } from '../services/apiServices';

const useFetch = () => {

    const [loading, setLoading]=useState(false);

    /*Hará la solicitud por página */
    const requestAPI=(page=1)=>{
        return fetch(getUrl(page))
            .then(response=>response.json())
            .then(data=>{
                setLoading(false);
                return {
                    status: 'ok',
                    ...data
                };
            })
            .catch(err=>{
                return {
                    status: 'error',
                    description: err
                };
            });
    };
    return { loading, requestAPI }
};

export default useFetch;