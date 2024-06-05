import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/lakshya324" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/lakshyasharma3/",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/Lakshya324",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/lakshya.sharma___/",
  },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
