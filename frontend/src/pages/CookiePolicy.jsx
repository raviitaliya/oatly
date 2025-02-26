import React from 'react'
import backgroundImage from '../assets/Footer/backgroundd.jpg'
import cookie1 from '../assets/Footer/cookie1.png'
import Footer from '@/components/Footer'
const CookiePolicy = () => {
  return (
    <div>
      <div  style={{ backgroundImage: `url(${backgroundImage})` }} className="flex items-center justify-center py-40  ">
      <h1 class="text-9xl font-bold font-font1 tracking-wider text-black">COOKIE POLICY</h1>
      </div>
      <div className=" flex items-center justify-center mt-10 p-6">
      <div className="max-w-4xl mx-auto text-black font-font2 font-semibold text-xl leading-relaxed">
        <p>
          We know what you must be thinking, ‘Really? Another boring cookie
          policy?’. We get it, you’ve probably come across copious amounts of
          policies like this one on other sites, but we wanted to give you our
          cookies story.
        </p>

        <p className="mt-4">
          We use cookies on our website to improve your digital encounter with
          us and to make sure that you can have a nice annoyance-free time on
          our site, while checking out what we think you want to check out
          instead of doing totally annoying things like entering a password or
          choosing a language for the twenty seventh time. However, it’s always
          up to you as a visitor on our website to say "Ok with me” or "No
          thanks”. Depending on your answer, this is how we handle your personal
          details and privacy:
        </p>

        <p className="mt-4 font-bold">
          All users visiting our website – including visitors clicking "No
          thanks"
        </p>

        <p>
          Anonymous analytical data will be stored to{" "}
          <span className="border-b-2 border-dashed border-black">Plausible</span>, in order to track the
          usage of a website without collecting any personal data or personally
          identifiable information. Cookies are not set and all data is in
          aggregate only.
        </p>

        <p className="mt-4 font-bold">Users clicking "OK with me”</p>

        <p>
          "Necessary", "Functional" and "Analytical" cookies will be stored.
          (Want to know more about them? Continue reading!)
        </p>

        <p className="mt-4">
          Although that was technically the end of our cookies story, we figured
          that one or two of you might possess above average interest in cookies
          and want to know exactly what types of cookies we use, how and why we
          use them, and the different settings you can adjust in your web
          browser or on your hand-held high-tech device. So, if you identify as
          one or two of those people with above average interest in cookies –
          just keep scrolling, this one is for you.
        </p>

        <p className="mt-4">
          Now, there’s just one last thing we’d like to say before you keep
          reading, and that is that you can find all the information on how we
          handle your personal details in our privacy policy{" "}
          <span className="border-b-2 border-dashed border-black">here</span>.
        </p>

        <h2 className="font-extrabold font-font1 text-3xl mt-12 uppercase tracking-wide">
          WHAT ARE COOKIES AND WHAT DO WE USE THEM FOR?
        </h2>

        {/* Paragraphs */}
        <p className="mt-2">
          A cookie is a small text file that gets stored on your computer, phone or tablet 
          when you’re visiting a website. We, or one of our partners, place cookies on our website 
          to improve our site and to make sure that basic features and services function properly.
        </p>

        <p className="mt-4">
          Some of these cookies store really basic information about our site’s users, and that 
          really basic information really helps us help you navigate our website really easily. 
          But not all of them are easy to identify (unless you are entering contact information 
          like your e-mail address in a form somewhere on purpose, well then, we do have that piece 
          of information saved about you), so we thought we’d break it down for you. Below, you can 
          read all about the different types of cookies we collect and store on our site, how long 
          we save them for and how they are used.
        </p>

        {/* Subheading */}
        <h2 className="font-extrabold text-3xl uppercase font-font1 tracking-wide mt-12">
          NECESSARY COOKIES
        </h2>

        <p className="mt-2">
          The name kind of gives it away, but just to be super clear – necessary cookies are very, 
          very necessary. Without them, basic website functions like site navigation and accessibility 
          would not be possible, and we would not even be able to provide you with a properly working 
          website to visit. And that would just not be fun for anybody.
        </p>
            <div className='mt-4 w-'>
                <img src={cookie1} alt="" className='w-full' />
            </div>

        {/* Subheading */}
        <h2 className="font-extrabold text-lg uppercase tracking-wide mt-6">
          FUNCTIONAL COOKIES
        </h2>

        <p className="mt-2">
          To be able to save your preferred settings or personal details for future visits, we use functional 
          cookies. Without these types of cookies, we wouldn’t be able to tailor our services and features 
          the way you like it. Functional cookies are necessary as they allow us to make sure your visit is as 
          easy and smooth as possible. That means that the next time you come back to our site, you won’t have 
          to repeat annoying things like choosing the language that is most relevant to you. You can just jump 
          straight in and check out what’s new in the world of liquid oats. Pretty nice, huh?
        </p>
    

      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CookiePolicy
