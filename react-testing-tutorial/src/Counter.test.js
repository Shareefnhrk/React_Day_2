import { render,fireEvent,screen } from "@testing-library/react";
import Counter from "./counter";


test("increments counter",()=>{
    render(<Counter/>);
    const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");
fireEvent.click(incrementBtn);
   // console.log('testin is awesome');
   expect(counter).toHaveTextContent("1");
   fireEvent.click(incrementBtn);
   expect(counter).toHaveTextContent("2");
});

test("decrements counter",()=>{
    render(<Counter/>);
    const counter = screen.getByTestId('counter');
    const decrementBtn = screen.getByTestId('decrement');
    fireEvent.click(decrementBtn);
    expect(counter).toHaveTextContent('-1');
});
test("reset counter",()=>{
    render(<Counter/>);
    const counter = screen.getByTestId('counter');
    const resetBtn = screen.getByTestId('reset');
    fireEvent.click(resetBtn);
    expect(counter).toHaveTextContent('0');
});



// test('testing',()=>{
//     console.log('testing');
// })