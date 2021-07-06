import React, { useState } from "react";
import { connect,useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/increAction/Action";

function ReduxIncr() {
  const [number, setnumber] = useState(1)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  console.log("props",typeof number)
  return (
    <div>
      <h2>Increment {state.count}</h2>
      <input type="number" value={number} onChange={e => setnumber(e.target.value)}/>
      <button onClick={()=>dispatch(increment(parseFloat(number)))}>increment {number} cnt</button>
      <button onClick={()=>dispatch(decrement(parseFloat(number)))}>decrement {number} cnt</button>
    </div>
  );
}

export default ReduxIncr;