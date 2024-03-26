import {useSelector} from 'react-redux'

export default function useAuth() {
    const token = useSelector(state => state.auth.token)
    if (!token) {
        return {
            isAuthenticated: false,
            token: null,
        }
    }
    return {
        isAuthenticated: true,
        token: token,
    }
}