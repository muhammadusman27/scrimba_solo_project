import './css/index.css';
import Photo from './components/info/Photo';
import Name from './components/info/Name';
import FirstDouble from './components/info/button/FirstDouble';
import FirstSingle from './components/info/button/FirstSingle';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import SecondFooter from './components/footer/SecondFooter';

function App() {
    return (
        <div className='container py-4'>
            <div className="row justify-content-center">
                {/* card 1 */}
                <div className='col-11 col-sm-10 col-md-6 col-lg-5 mx-md-0 mx-lg-3 mb-4'>
                    <div className='card_background px-4 px-sm-4 px-md-4 px-lg-5 py-4'>
                        <div className='card_inner_content dark_content_bg mx-auto'>
                            <Photo />
                            <Name title="name_title text-center name_title_dark" role="text-center role mb-0 my-2 role_dark" website="mb-0 text-center website_name mt-2 website_name_dark" />
                            <FirstDouble email="btn btn-light w-100 shadow-none" />
                            <About 
                                title_class="about_interest about_interest_dark" 
                                description_class="mb-0 about_interest_description about_interest_description_dark"
                                title="About"
                                description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
                            <About 
                                title_class="about_interest about_interest_dark" 
                                description_class="mb-0 about_interest_description about_interest_description_dark"
                                title="Interests"
                                description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
                            <Footer />
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className='col-11 col-sm-10 col-md-6 col-lg-5 mx-md-0 mx-lg-3 mb-4'>
                    <div className='card_background px-4 px-sm-4 px-md-4 px-lg-5 py-4'>
                        <div className='card_inner_content dark_content_bg mx-auto'>
                            <Photo />
                            <Name title="name_title text-center name_title_dark" role="text-center role mb-0 my-2 role_dark" website="mb-0 text-center website_name mt-2 website_name_dark" />
                            <FirstSingle email="btn btn-light w-100 shadow-none border border-secondary" />
                            <About 
                                title_class="about_interest about_interest_dark" 
                                description_class="mb-0 about_interest_description about_interest_description_dark" 
                                title="About"
                                description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
                                />
                            <About 
                                title_class="about_interest about_interest_dark" 
                                description_class="mb-0 about_interest_description about_interest_description_dark"
                                title="Interests"
                                description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
                            <SecondFooter />
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className='col-11 col-sm-10 col-md-6 col-lg-5 mx-md-0 mx-lg-3 mb-4'>
                    <div className='card_background px-4 px-sm-4 px-md-4 px-lg-5 py-4'>
                        <div className='card_inner_content light_content_bg mx-auto'>
                            <Photo />
                            <Name title="name_title text-center name_title_light" role="text-center role mb-0 my-2 role_light" website="mb-0 text-center website_name mt-2 website_name_light" />
                            <FirstDouble email="btn btn-light w-100 shadow-none border border-secondary"/>
                            <About 
                                title_class="about_interest about_interest_light" 
                                description_class="mb-0 about_interest_description about_interest_description_light"
                                title="About"
                                description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
                                />
                            <About 
                                title_class="about_interest about_interest_light" 
                                title="Interests"
                                description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
                                description_class="mb-0 about_interest_description about_interest_description_light" />
                            <Footer />
                        </div>
                    </div>
                </div>
                
                {/* card 4 */}
                <div className='col-11 col-sm-10 col-md-6 col-lg-5 mx-md-0 mx-lg-3 mb-4'>
                    <div className='card_background px-4 px-sm-4 px-md-4 px-lg-5 py-4'>
                        <div className='card_inner_content light_content_bg mx-auto'>
                            <Photo />
                            <Name title="name_title text-center name_title_light" role="text-center role mb-0 my-2 role_light" website="mb-0 text-center website_name mt-2 website_name_light" />
                            <FirstSingle email="btn btn-light w-100 shadow-none border border-secondary" />
                            <About 
                                title_class="about_interest about_interest_light" 
                                description_class="mb-0 about_interest_description about_interest_description_light"
                                title="About"
                                description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
                                />
                            <About 
                                title_class="about_interest about_interest_light" 
                                description_class="mb-0 about_interest_description about_interest_description_light"
                                title="Interests"
                                description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
                            <SecondFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;