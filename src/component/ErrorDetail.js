import { useNavigate } from "react-router-dom";

const ErrorDetail = ({errorData, disableHomeButton}) => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Error: {errorData.id}</h1>
            <h3>{errorData.message}</h3>
            {
                !disableHomeButton?<button onClick={goToHome}>Go To Home</button>:<></>
            }
            
        </div>
    )
}

export default ErrorDetail;