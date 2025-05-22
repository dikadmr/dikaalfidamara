import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";

export function Footer() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/dikaalfidamaraa/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/dikadmr",
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-7xl pb-5">
        <div className="max-w-7xl mx-auto px-4 mb-10 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl font-bold text-black dark:text-white">
            Contacts
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-8 lg:px-10">
          {" "}
          <CardSpotlight className="w-full max-w-2xl mx-auto p-8 dark:bg-neutral-900 bg-neutral-200 border dark:border-neutral-800 border-neutral-100 rounded-lg shadow-lg">
            <div className="flex items-center">
              <EmailIcon className="inline-block mr-2 z-20" />
              <p className="text-base md:text-xl font-bold relative z-20 text-black dark:text-white">
                Email
              </p>
            </div>
            <div className="text-sm md:text-base text-black dark:text-white mt-4 relative z-20">
              Send me an email at:
              <ul className="list-none mt-2">
                <li>dikadmraa@gmail.com</li>
              </ul>
            </div>
          </CardSpotlight>
          <CardSpotlight className="w-full max-w-2xl mx-auto p-8 dark:bg-neutral-900 bg-neutral-200 border dark:border-neutral-800 border-neutral-100 rounded-lg shadow-lg">
            <div className="flex items-center">
              <PhoneIcon className="inline-block mr-2 z-20" />
              <p className="text-base md:text-xl font-bold relative z-20 text-black dark:text-white">
                Phone
              </p>
            </div>
            <div className="text-sm md:text-base text-black dark:text-white mt-4 relative z-20">
              You can call me at:
              <ul className="list-none mt-2">
                <li>+62 812-7529-1764</li>
              </ul>
            </div>
          </CardSpotlight>
          <CardSpotlight className="w-full max-w-2xl mx-auto p-8 dark:bg-neutral-900 bg-neutral-200 border dark:border-neutral-800 border-neutral-100 rounded-lg shadow-lg">
            <div className="flex items-center">
              <LocationOnIcon className="inline-block mr-2 z-20" />
              <p className="text-base md:text-xl font-bold relative z-20 text-black dark:text-white">
                Address
              </p>
            </div>
            <div className="text-sm md:text-base text-black dark:text-white mt-4 relative z-20">
              You can find me at:
              <ul className="list-none mt-2">
                <li>Binjai, Sumatera Utara</li>
              </ul>
            </div>
          </CardSpotlight>
        </div>
      </div>
      <div className="flex items-center justify-center  w-full pb-6">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </>
  );
}
