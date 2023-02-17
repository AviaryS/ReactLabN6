import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function CartPage({cart, setCart, order, setOrder}) {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    function checkout() {
        setOrder([...order, cart]);
        alert('Товар успешно оформлен');
        navigate('/');
        setCart([]);
    }

    function removeDog(dog) {
            setCart(cart.filter((x) => x.id !== dog.id));
    }

    return (
        <div>
            {cart.length !== 0 && <h1>Оформить заказ</h1>}
            <div className='dogs'>
                {cart.map((dog) => {
                    return (
                        <div className='dog'>
                            <p>{dog.name}</p>
                            <div>
                                <p>Количество: {count}</p>
                                <button onClick={() => setCount(count - 1)}>-</button>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>

                            <button className='button' onClick={() => removeDog(dog)}>Удалить</button>
                        </div>
                    )
                })}
            </div>
            {cart.length !== 0 ?
                <button className='button' onClick={checkout}>Оформить заказ</button>
                :
                <h1>Товаров нет</h1>
            }
        </div>
    );
}

export default CartPage;