import { waitFor,render,screen } from "@testing-library/dom";
import Todos from "./Todos";
import axios from "axios";

const dummyTodos = [
    {
        userId: 1,
        id: 2,
        title: "todos 1",
        completed: false
    },
 {
        userId: 1,
        id: 2,
        title: "todos 1",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "todos 2",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "todos 3",
        completed: false
    },
];

axios.get.mockResolvedValue({ data: dummyTodos });
test("testing Todos", () => {
    jest.mock("axios")
    render(<Todos />);
    const todosList = await waitFor(() => screen.findAllByTestId('todos'));
    expect(todosList).toHaveLength(3);
})