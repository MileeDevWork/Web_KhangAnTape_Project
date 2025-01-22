import React from 'react'; 
import Header from '../../components/header_logout'; 
import Footer from '../../components/footer';
import BannerSlide from '../../components/banner';

function Home() {
    return (
        <>
        <div className="bg-slate-300 w-screen">
        <Header />
            <BannerSlide />
        <Footer />
        </div>
        </>
    )
}
export default Home;