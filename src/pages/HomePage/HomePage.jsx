import React, {useEffect, useState} from 'react';
import Loading from "../../components/Loading/Loading";
import './style.css'

function HomePage({setRegCheck, login, cart, setCart}) {
    setRegCheck(false);

    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);


    useEffect(() => {
        const fetchDogs = async () => {
            setLoading(true);
            await fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=sold")
                .then((res) => res.json())
                .then((json) => {
                    setDogs(json);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        fetchDogs();
    }, []);

    if (loading) {
        return <Loading />;
    }

    function addToCart(dog) {
        if (cart.find((x) => x.id === dog.id) === undefined) {
            setCart([...cart, {
                id: dog.id,
                name: dog.name,
                count: 1
            }])
        }

    }

    return (
        <div >
            <h1>Все собаки</h1>
            <div className='dogs'>
                {dogs.map((dog) => {
                    return (
                        <div className='dog' key={dog.id}>
                            <p>{dog.name}</p>
                            {login &&
                                <button className='button' onClick={() => addToCart(dog)}>
                                    Добавить в корзину
                                </button>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;