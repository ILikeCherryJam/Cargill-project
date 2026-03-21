import './css/hero.css';

export default function Hero() {
    return (
        <section className='about-hero'>
            <div className="container about-hero_container">
                <div className="about-hero_desc">
                        <h1>We are family company commited to <br />
                            providing <span>food and agricultural</span> solutions <br />
                            to nourish the world in a safe, <br /> 
                            responsible and sustainable way.    
                        </h1>
                    <p>
                        We sit at the heart of the supply chain, 
                        partnering with producers and customers to source, 
                        make and deliver products that are vital for living. 
                        By providing customers with life’s essentials, 
                        we help businesses grow, communities prosper, 
                        and consumers live well. It’s a long-term view, 
                        harnessing over 160 years of experience to do 
                        the right thing today, and for generations to come.
                    </p>
                </div>
            </div>
        </section>
    )
}