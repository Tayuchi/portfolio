import Image from "next/image";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Navbar from "./components/layouts/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <Header />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Tayu's portfolio
      </main>

      <Footer />
    </div>
  );
}
