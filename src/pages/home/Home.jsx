import Main from "../../layouts/main/Main";
import Slider from "../../layouts/slider/Slider";
import TextCenter from "../../layouts/text-center/TextCenter";
import TextWithImage from "../../layouts/text-with-image/TextWithImage";

export default function Home() {
  return (
    <>
      <Main />
      <TextCenter />
      <TextWithImage />
      <Slider />
    </>
  );
}
