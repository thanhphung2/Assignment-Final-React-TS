import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const ProductManagementPage = (props) => {
    const removeProduct = (id) => {
        props.onRemove(id)
    }

    const data = props.products.map(item => {
        return {
            key: item.id,
            name: item.name,
            price: item.price
        }
    })
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Link to={'/admin/products/add'}>Add New</Link>
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5, showQuickJumper: true }} />
}

export default ProductManagementPage