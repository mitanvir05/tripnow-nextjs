import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto flex flex-wrap justify-between gap-10">
        {/* About Us */}
        <div className="space-y-4 text-left">
          <h1 className="text-lg font-bold">About Us</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Our Story
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Mission & Values
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Team
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Press
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Sitemap
          </p>
        </div>
        {/* Support */}
        <div className="space-y-4 text-left">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Help Center
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Contact Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            FAQ
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Returns
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Shipping
          </p>
        </div>
        {/* Legal */}
        <div className="space-y-4 text-left">
          <h1 className="text-lg font-bold">Legal</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Terms of Service
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Cookie Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Disclaimer
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Accessibility
          </p>
        </div>
        {/* Connect */}
        <div className="space-y-4 text-left">
          <h1 className="text-lg font-bold">Connect</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Facebook
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Twitter
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Instagram
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            LinkedIn
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600">
            Newsletter
          </p>
        </div>
      </div>
      {/* bottom footer */}
      <div className="mt-8 w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm border-t pt-8">
        <p className="text-left"> {/* Removed text-center from here and relied on md:text-left */}
          © {new Date().getFullYear()} Travel For All. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link className="text-gray-500 hover:text-blue-600" href="#">
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link className="text-gray-500 hover:text-blue-600" href="#">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link className="text-gray-500 hover:text-rose-600" href="#">
            <FaInstagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;