import { Button } from "antd";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
    <Link to={'/'}><Button className="">Home page</Button></Link> 
    </div>
  );
};

export default AdminDashboard;