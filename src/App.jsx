import { Navbar, Hero, ProductPage } from "./components";
import Brand from "./components/Brand";

export default function App() {
  return (
    <>
      <div className="font-jakarta">
        <Navbar />
        {/* <Hero />
        <Brand /> */}
        <ProductPage />
      </div>
    </>
  );
}
