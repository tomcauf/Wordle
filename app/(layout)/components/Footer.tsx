import { GitBranch, Mail, Code } from "lucide-react";
import Link from "next/link";
import { SiteConfig } from "@/site-config";
import { version } from "../../../package.json";

const Footer = () => {
  return (
    <div className="grid w-full grid-cols-3 p-3 text-xs sm:w-[80vh] sm:p-0">
      <div className="flex flex-row gap-4">
        <Link
          href={`mailto:${SiteConfig.maker.contact}`}
          className="flex flex-row items-center gap-0.5 bg-transparent text-gray-500 hover:text-gray-700 hover:no-underline"
        >
          <Mail size={16} />
          Contact
        </Link>
        <Link
          href={SiteConfig.gitUrl}
          target="_blank"
          className={
            "flex flex-row items-center gap-0.5 bg-transparent text-gray-500 hover:text-gray-700 hover:no-underline"
          }
        >
          <Code size={16} />
          Github
        </Link>
      </div>
      <div></div>
      <div className="flex flex-row justify-end">
        <div className="flex flex-row items-center gap-0.5 bg-transparent text-gray-500 hover:text-gray-700 hover:no-underline">
          <GitBranch size={16} />v{version}
        </div>
      </div>
    </div>
  );
};

export default Footer;
