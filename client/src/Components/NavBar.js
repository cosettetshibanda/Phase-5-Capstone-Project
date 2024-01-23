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
        {(user && !user.errors) ? (
          <div>
            <p>
              <h3>Welcome {user.username}</h3>
              <Link id='linkStyles' className='link' to="/" >Home</Link>
              <button onClick={handleLogoutClick}>Log Out</button>
            </p>
          </div>
        ) : (
          <div>
              <Link id='linkStyles' onClick={() => dispatch(reset())} to='/login'>Login</Link>
              <Link id='linkStyles' onClick={() => dispatch(reset())} to='signup'>Signup</Link>
          </div>
        )}
      </div>
    )
}

export default NavBar