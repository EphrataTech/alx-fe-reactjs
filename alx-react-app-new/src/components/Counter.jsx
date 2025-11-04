import { useEffect } from "react";  

export default function Counter({ count, setCount }) {
    const [count, setCount] = useState(0);
       <div>
    <button onClick={() => setCount(count + 1)}>
     Increment
    </button>   
    <button onClick={() => setCount(count - 1)}>
      Decrement
    </button>
    <button onClick={() => setCount(0)}>
       Reset
    </button>

    </div>

}