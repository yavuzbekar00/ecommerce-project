import React from 'react'
import './Main.css'

function Main({ products }) {
    return (
        <div className='main-container'>
            <div className='main-form'>
                <input className='main-input' placeholder='Ara'></input>
                <button className='main-button'>Ara</button>
            </div>
            <div className='products'>
                {
                    products.map((product) => (
                        < div key={product.id} className='product-card' >
                            <div className='product-image'>
                                <img src={product.image} alt='resim'></img>
                            </div>
                            <div className='product-detail'>
                                <div className='product-name'>{product.name}</div>
                                <div className='product-content'>{product.content}</div>
                                <div className='product-price'>{product.price}</div>
                            </div>
                            <div className='product-basket'>
                                <button className='product-basket-button'>Sepete Ekle</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Main 