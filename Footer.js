import React from 'react';
import './index.css';

const Footer = () => {
  const year = new Date();
  return (
    <div className="footer">
      <p className="year">Copyright &copy; {year.getFullYear()}</p>
    </div>
  );
};

export default Footer;
