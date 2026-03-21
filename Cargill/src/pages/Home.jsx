import Hero from '../components/!mainPage/Hero';
import Purpose from '../components/!mainPage/Purpose';
import Video from '../components/cards/Video';
import AdContainer from '../components/!mainPage/adContainer';
import Footer from '../components/cards/Footer';

export default function Home() {

  return (
    <>
      <Hero />
      <Purpose />
      <Video
        src="https://www.youtube.com/embed/SZLZo5_AUaI?si=3zU2jsrtt3IYvFcH" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen 
      />
      <AdContainer />
      <Footer />
    </>
  )
}
