//import React from 'react'
//import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1
            style={{
              fontSize: "2rem",
              fontFamily: "'Eater', serif",
              marginBottom: "15px",
            }}
          >
            Fashion
          </h1>
          <p className="w-full md:w-2/3 text-gray-600">
            Welcome to Fashion – where tradition meets trend. We bring you a
            curated collection of stylish, affordable, and premium-quality
            clothing for every mood and moment. From timeless ethnic wear to
            everyday essentials, Fashion is your one-stop destination for
            effortless style. Step in, style up, and express yourself with
            confidence.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9527459675</li>
            <li>contact@fashion.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Fashion.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
