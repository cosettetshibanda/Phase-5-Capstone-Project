import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserInput(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.users.entities)
    const errors = useSelector(sate => state.users.errorMessages)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const userData = {
        username: username,
        password: password,
        errors: null
    }

    useEffect(() => {
        if(user && !user.errors){
            navigate('/')
            setUsername('')
            setPassword('')
        }
    }, [user, navigate])

    
}

export default UserInput