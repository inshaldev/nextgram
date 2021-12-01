import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-center border-b border-gray-900 w-full h-18">
      <div className="flex justify-between items-center w-9/12 p-4">
        <h1 className=" text-3xl">Nextgram</h1>

        <ul className="flex justify-between">
          <ListItem to="/home">Home</ListItem>
          {/* <ListItem to="/home">Add Post</ListItem> */}
          <ListItem to="/notifications">Notifications</ListItem>
        </ul>
      </div>
    </div>
  );
};

const ListItem = ({ to, children }) => {
  return (
    <>
      <Link to={to}>
        <li className="mx-2">{children}</li>
      </Link>
    </>
  );
};
export default Navbar;
