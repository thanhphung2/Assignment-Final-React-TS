import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = (props: { products: any[] }) => {
    const { id } = useParams()
    const currentProduct = props.products.find((item: { id: string | undefined }) => item.id == id)

    return (
        <div>
            <h3>{currentProduct?.name}</h3>
            <p>{currentProduct?.price}</p>
        </div>
    )
}

export default ProductDetailPage