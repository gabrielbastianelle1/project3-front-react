import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const refreshPage = () => {
    navigate(0);
}

export default refreshPage