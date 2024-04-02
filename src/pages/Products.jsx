import React, { useContext } from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import { ShopContext } from '../context/ShopContext';
import {useParams} from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Products = () => {
    const {all_product} = useContext(ShopContext);
   

    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
console.log(product);
  return (
    <div className=''>
    <Breadcrumb product={product} />
    <ProductDisplay product={product} />
    <DescriptionBox />
    <RelatedProducts />
    </div>
  );
}

export default Products;
