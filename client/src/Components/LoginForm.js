import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function LoginForm () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.users.entities)
    const errors = useSelector(state => state.users.errorMessages)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const userData = {
        username: username,
        password: password,
        errors: null
    }

    useEffect(() => {
        if (user && !user.errors){
            navigate('/')
            setUsername('')
            setPassword('')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(userData))
        setUsername('')
        setPassword('')
    }
    return (
        <div id='content'>
            <section>
                <h1>Log In</h1>
            </section>
            <form id='input-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username
                        <input type="text"
                            value={username} placeholder='Username'
                            autoComplete="on" onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='password'>Password
                        <input type="password"
                            value={password} placeholder='Password'
                            autoComplete="off" onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
                <div>
                    {errors?.map((err) => (
                        <p id='errors' key={err}>{err}</p>
                        ))
                    }
                </div>
            </form>
        </div>
      );
}

export default LoginForm