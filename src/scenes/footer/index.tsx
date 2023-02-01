import React from "react";
import Logo from "@/assets/Logo.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            We are dedicated to putting your fitness needs first
          </p>
          <p>@ Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> Twitter </p>
          <p className="my-5"> On instagram</p>
          <p>On facebook</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We would to hear from you</p>
          <p>+277 700 800</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
