import React from 'react'
import Layout from '../../shared_components/Layout'
import Title from './../../shared_components/Title/index'
import SecondAbout from './About_components/Section_2'
import ThirdAbout from './About_components/Section_3'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
function About() {
  AOS.init()

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })
  return (
    <Layout>
      <Title
        title="About Us"
        text="We display products based on the latest products we have, if you want
to see our old products please enter the name of the item"
      />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <iframe
          width="1240"
          height="550"
          src="https://www.youtube.com/embed/SpJLXEdyI5E?list=PLDYtK_l_JpVOSk1pihgZGl8B6nUASvxyn"
          allowfullscreen
        ></iframe>
      </div>
      <div data-aos="zoom-in">
        <SecondAbout />
      </div>

      {/* <div className="my-[180px] w-5 ">
        <h1 className="text-white">shgjaskjdf</h1>
      </div> */}
      <ThirdAbout />
    </Layout>
  )
}

export default About
