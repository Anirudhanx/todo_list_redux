import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/Index";
import "./todo.css";



const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
    
    <div className="box">
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption><h3>Add Your List Here 📝</h3></figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍🏻 Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />

            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" 
            onClick={() => dispatch(removeTodo())}>
              <span>
                Check List
              </span>
            </button>

          </div>




        </div>
      </div>
      </div>
    </>
  );
};

export default Todo;
