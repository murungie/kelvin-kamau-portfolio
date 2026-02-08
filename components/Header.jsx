import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <div className="container mx-auto px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6 lg:py-8">
          
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={48}
              priority
              className="max-w-full h-auto"
            />
          </Link>

          {/* Desktop socials only */}
          <Socials className="hidden lg:flex" />
        </div>
      </div>
    </header>
  );
};

export default Header;