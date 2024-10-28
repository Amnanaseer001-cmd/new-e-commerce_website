import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Flavours from "@/components/flavor";
import Products from "@/components/products";
import Discount from "@/components/discount";
import Footer from "@/components/footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Flavours />
      <Products />
      <Discount />
      <Footer />
    </>
  );
}
