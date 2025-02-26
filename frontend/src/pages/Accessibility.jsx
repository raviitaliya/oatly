import Footer from '@/components/Footer'
import React from 'react'

const Accessibility = () => {
  return (
    <div>
      <div className="bg-white min-h-screen flex items-center justify-center px-6 py-10 pt-24">
      <div className="max-w-5xl mx-auto text-black  leading-[1.6] text-center">
        
        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-font1 font-bold uppercase tracking-wider">
          Web Accessibility <br /> Statement
        </h1>

        {/* Content */}
        <div className="text-left  mt-20 text-xl font-font2 font-semibold">
          <p className="mb-5">
            Oatly.com is designed to be compatible with widely-distributed browsers and accessibility-supported user agents, such as HTML, CSS, and JavaScript, provided you are not using a version that is older than 3 major updates or, for mobile operating systems, that is no more than 3 years old.
          </p>
          <p className="mb-5">
            We use both accessibility testing tools and manual testing to assure quality throughout the website's design, development, and maintenance processes. Despite our best efforts to ensure that accessibility is part of everything we do on oatly.com, there may be some limitations when it comes to third-party applications used. We are always in discussion with our suppliers of third-party tools and would love your help to address any issues.
          </p>
          <p>
            If you should experience any difficulty using oatly.com or think something is missing from this statement, don't hesitate to get in touch with us, so we can work with you to ensure full access to the public information available on our site. We will respond as quickly as possible, and within 3 working days.
          </p>
        </div>

        <div className="mt-10 text-left">
          <h2 className="text-5xl font-bold font-font1 uppercase tracking-wider">Contact Information</h2>
          <p className="mt-6 font-font2 text-xl ">
            If you have any questions please contact us at{" "}
            <a href="mailto:info@oatly.com" className="border-b-2 border-dashed border-black">
              info@oatly.com
            </a>. Or through any of our official social media accounts.
          </p>
          <p className="my-16 text-xl font-font2 font-semibold">
            This statement was last updated on December 22, 2022
          </p>
        </div>
        
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Accessibility
