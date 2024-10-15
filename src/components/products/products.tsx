import React, {FC} from 'react';
import {IProductsModel} from "../../models/IProductsModel";
import {productsApiList} from "../../data";
import Product from "./product/product";

const Products:FC = () => {
    const products:IProductsModel[] = productsApiList.products;
    return (
        <div>
            {
                products.map((product:IProductsModel) => (<Product item={product}/>))
            }
        </div>
    );
};

export default Products;