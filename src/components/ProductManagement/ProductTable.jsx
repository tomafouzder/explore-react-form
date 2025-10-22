import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Products: {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.actions}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;