import{useState} from 'react';

function Orderform(props) {// useState is one of the hook in react
    const [order,setOrder]= useState({
        item:'laptop'
    }
    );
    function updateValue(event){
        console.log(event.target.value);
        setOrder({item:event.target.value});
    }
    return(
        <div>
            <center>
            <h1>order form</h1>
            <input value={order.item} onChange={updateValue}></input><br/>
            </center>
        </div>
    )
}
export default Orderform;