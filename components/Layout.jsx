import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>Kelvin Kamau | Portfolio</title>
      </Head>

      <TopLeftImg />
      <Header />
      <Nav />
      

      {/* main content */}
      <div className="pt-[110px] lg:pt-[130px]">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
