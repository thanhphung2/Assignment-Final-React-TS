import { useState, useEffect } from "react"
import { IProduct } from "../types/product"
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
const ProductsPage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    return (
        <div>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        <h3 >{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default ProductsPage