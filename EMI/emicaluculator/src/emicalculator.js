import { useState } from 'react';

function EMIcalculater() {
    const [formdata, setEmi] = useState({
        amount: 100000,
        month: 12,
        intrest: 1
    })


    function eventHandler(event) {
        setEmi({ ...formdata, [event.target.name]: (event.target.value) })
    }

    function calculateTotal() {
        if ((formdata.amount < 0) || (formdata.month < 1) || (formdata.intrest < 0)) {
            return 'error';
        }
        let intrestAmount = formdata.amount * (parseInt(formdata.intrest) / 100)
        let totalInterestAmout = (parseInt(formdata.month * intrestAmount))
        let totalAmount = (parseInt(formdata.amount + totalInterestAmout))
        return totalAmount
    }

    return (
        <div>
            <h3>Lone:{formdata.amount}</h3>
            <input min='10000' max='100000' type='range' name='amount' onChange={eventHandler}></input>
            <h3>Months:{formdata.month}</h3>
            <input min='6' max='60' type='range' name='month' onChange={eventHandler}></input> months
            <h3>Intrest{formdata.intrest}</h3>
            <input min='6' max='24' type='range' name='intrest' onChange={eventHandler}></input>
            <h3>Total Amount:</h3>
            <input type='text' value={calculateTotal()}></input>
        </div>
    )

} export default EMIcalculater