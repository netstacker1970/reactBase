import { Link, NavLink } from "react-router";
import './AppLayout.css';



export const AppLayout = ({children}: React.PropsWithChildren) => {

    return (
        <div className="">
            <div className="layout-header layout-nav flex items-center  gap-2 justify-center py-2">  
                <NavLink to="/" className="btn">Home</NavLink>
                 <NavLink to="/sobre" className="btn">Sobre</NavLink>
                 <NavLink to="/details" className="btn">Details</NavLink>
            </div>
            <hr className="layout-divider" />
            {children}
        </div>
    );
}