import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('auth')) {
            navigate('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <div className="error-404">Page not found</div>;
}