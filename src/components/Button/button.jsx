
import { Link } from 'react-router-dom';
import "./button.css";

export const Button = ({_id}) => {
  
    return (
        <>
        <Link to={`/details/${_id}`} className="btn-details">Ver detalles</Link>
        </>
    );
};