import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, setCount } from "../redux/slices/counterSlice"

const Counter = () => {
  // dispatch mantığı değişmiyor
  const dispatch = useDispatch()

  // abone olma mantığı değişmiyor
  const store = useSelector((store)=> store.counterReducer )


  return (
    <div className="vh-100 w-full d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center gap-4 align-items-center">
        <button onClick={()=> dispatch(decrease())} className="btn btn-danger">Azalt</button>
        <span className="lead fw-bold">{store.count}</span>
        <button onClick={()=> dispatch(increase())} className="btn btn-success">Arttır</button>
        <input className="w-25" type="number" onChange={(e)=> dispatch(setCount(+e.target.value))} />
      </div>
    </div>
  )
}

// +e.target.value --> başındaki +'nın anlamı e.target.value'yi sayıya çevir demek.
// mesela +"65" --> 65 olur. Number(e.target.value) yapılırsa da sayıya döner

export default Counter