import { Outlet, Link } from "react-router-dom";
import img from "../../assets/img/image8.png";
export function Bt_carpeta() {
  return (
    <div>
      <nav>
        <Link to="gestionclientes/proforma">
          <img src={img} height={50} width={50}></img>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default Bt_carpeta;
