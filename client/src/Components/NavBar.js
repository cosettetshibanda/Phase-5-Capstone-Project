import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function NavBar(){
    const user = useSelector(state => state.users.entities)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        dispatch(logout(user))
        navigate('/')
    }

    return(
        <div id='nav'>
        <Username />
        {(user && !user.errors) ? (
          <div>
            <p>
              <Link id='linkStyles' className='link' to="/" >Home</Link>
              <button onClick={handleLogoutClick}>Log Out</button>
            </p>
          </div>
        ) : (
          <div>
            {!(window.location.href.indexOf("/login") > -1) ? (
              <Link id='linkStyles' onClick={() => dispatch(reset())} to='/login'>Login</Link>
            ) : (null)}
             {!(window.location.href.indexOf("/signup") > -1) ? (
              <Link id='linkStyles' onClick={() => dispatch(reset())} to='signup'>Signup</Link>
            ) : (null)}
          </div>
        )}
      </div>
    )
}

export default NavBar