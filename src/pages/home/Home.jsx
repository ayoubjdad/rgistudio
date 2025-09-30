import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import Main from "../../layouts/main/Main";
import Slider from "../../layouts/slider/Slider";
import TextCenter from "../../layouts/text-center/TextCenter";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <TextCenter />
      <Slider />
      <Footer />
    </div>
  );
}
