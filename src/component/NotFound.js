import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>404 - Not Found</h1>
            <button onClick={goToHome}>Go To Home</button>
        </div>
    )
}

export default NotFound;