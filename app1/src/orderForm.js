import { useState } from 'react';
import './orderForm.css';
function Orderform(props) {// useState is one of the hook in react
    const [order, setOrder] = useState({
        item: 'laptop',
        price: 30,
        tax: 10
    }
    );
    function updateValue(event) {
        console.log(event.target.value);
        setOrder({ ...order, [event.target.name]: event.target.value });
    }
    function calculation() {
        if (order.tax < 0) {
            return "error";
        }
        return parseInt(order.price) * (1 + (parseInt(order.tax) / 100));

    }

    return (
        <div>
            <h1>order form</h1>
            <input value={order.item} name='item ' onChange={updateValue}></input>
            <input value={order.price} name='price' onChange={updateValue}></input>
            <input placeholder='tax' min='0' type='number' value={order.tax} onChange={updateValue} name='tax'></input>
            Total: {calculation()}
            <h1>{order.item}</h1>

        </div>
    )
}
export default Orderform;