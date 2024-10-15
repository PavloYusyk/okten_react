import React, {FC} from 'react';
import {IProductsModel} from "../../../models/IProductsModel";
import './product.css'

type TypeProps = {item:IProductsModel};

const Product:FC<TypeProps> = ({item}) => {
    return (
        <div className={'productBlock'}>
            <div className={'titleBlock'}>
                <h2>{item.title}</h2>
                <div className={'otherInfo'}>
                    <h4>Category: {item.category}</h4>
                    <h4>Rating: {item.rating}</h4>
                </div>
                <h3>Price: {item.price}$</h3>
            </div>
            <div className={'productInfo'}>
            <img src={item.thumbnail} alt={item.title}/>
                <p>{item.description}</p>
                <ul>Dimensions:
                   <li>W:{item.dimensions.width}</li>
                   <li>H:{item.dimensions.height}</li>
                   <li>D:{item.dimensions.depth}</li>
                </ul>
                <hr/>
            </div>
        </div>
    );
};

export default Product;