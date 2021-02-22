import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Yon Draco',
    description: 'Website cho biết thông tin về các hành tinh trong hệ mặt trời và cung cấp các sản phẩm thiên văn học',
    keywords: 'astronomical, moons, planets, comets'
}

export default Meta
