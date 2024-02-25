import { NavLink } from "react-router-dom"
import { toggleTheme } from "../redux/slices/counterSlice"
import { useDispatch } from "react-redux"

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className="d-flex justify-content-between mb-3 p-4">
        <h2>Redux Toolkit</h2>
        <nav className="d-flex gap-4 align-items-center">
            <NavLink className="text-info" to={"/"} >Counter</NavLink>
            <NavLink className="text-info" to={"/crud"}>Crud</NavLink>
            <button onClick={()=> dispatch(toggleTheme())}>Tema</button>
        </nav>
    </header>
  )
}

export default Header