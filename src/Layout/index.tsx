import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';


export const LandingPageLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{maxWidth: 1440, margin: "auto"}}>
        <Outlet />
      </div>
    </>
  );
};