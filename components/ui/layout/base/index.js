import Web3Provider from "../../../providers";
import { Navbar, Footer } from "../../common/";

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
}
