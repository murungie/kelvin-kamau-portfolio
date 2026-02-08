import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-secondary/95 backdrop-blur border-t border-white/10">
      <div className="container mx-auto py-4 flex flex-col items-center gap-3">
        
        <Socials />

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Kelvin Kamau
        </p>
      </div>
    </footer>
  );
};

export default Footer;