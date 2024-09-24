import React from 'react';
import useFetch from './useFetch';

const ProductDetail = ({ productId }) => {
    const baseUrl = 'https://example.com/api'; // Base URL'inizi buraya yazın
    const { data, loading, error } = useFetch(baseUrl, productId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
        </div>
    );
};

export default ProductDetail;

