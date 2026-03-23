import Hero from '../components/!aboutPage/Hero';
import StatsContainer from '../components/!aboutPage/StatsContainer';
import Video from '../components/cards/Video';
import InfoBlock from '../components/!aboutPage/InfoBlock';
import InfoImg1 from '../assets/images/infoImg1.png';
import InfoImg2 from '../assets/images/infoImg2.png';
import InfoImg3 from '../assets/images/infoImg3.png';
import Footer from '../components/cards/Footer';

export default function About() {
  return (
    <>
      <Hero />
      <StatsContainer />
      <Video 
        src="https://www.youtube.com/embed/SZLZo5_AUaI?si=3zU2jsrtt3IYvFcH" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen 
      />
      <InfoBlock 
        img={InfoImg1}
        title="Our heritage"
        slogan="Cargill was founded in 1865 on the promise 
        that ‘our word is our bond.’"
        description="Since our first grain warehouse brought growers and 
        sellers together 160 years ago, we’ve grown to be a global partner. 
        Yet we stay true to the values and ethos of a family company.​"
        imgClass2="media-active img-vanish"
        imgClass="media-vanish"
      />
      <InfoBlock
        img={InfoImg2}
        title="Cargill at a glance"
        slogan="Our colleagues make essential products that touch billions of lives every day."
        description="With our customers and partners, we source, make, store and transport goods from where they’re grown to where they’re needed.​​"
        imgClass="img-vanish"
      />
      <InfoBlock 
        img={InfoImg3}
        title="Our approach"
        slogan="We are committed to nourishing the world in a safe, responsible and sustainable way."
        description="Since our first grain warehouse brought growers and sellers together 160 years ago, we’ve grown to be a global partner. Yet we stay true to the values and ethos of a family company.​"
        imgClass2="media-active img-vanish"
        imgClass="media-vanish"
      />
      <Footer />
    </>
  );
}