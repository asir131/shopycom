
import bgecom from '../assets/hero'

const Hero = () => {
  return (
    <div className="">
       <div className="hero-img  justify-items-center  shadow-bottom">
          <img src={bgecom} alt="" />
       </div>

        <section  className="hero py-20 md:py-10 px-4">
            <div  className="container   w-1/2">
                <h1 className="text-4xl text-black md:text-6xl font-bold md:mt-0  mb-4 md:mb-6">
                    Discover Your Style
                </h1>
                <p className="text-lg text-black md:text-xl md:mt-16  mb-8 md:mb-12">
                Finding your personal style is like discovering your own unique fingerprint in the world of fashion. It's a journey of self-expression, where every outfit becomes a canvas for your creativity and personality. Whether you're drawn to classic elegance, edgy streetwear, or bohemian vibes, our latest collection offers an array of pieces to suit every taste and occasion.
                </p>
                <button className='bg-slate-900 rounded-md px-4 py-2'>Shop Now</button>

                
            </div>
            
            
        </section>
        

    
    
  
        
    </div>
    // style={{backgroundImage: `url(${bgecom})`,backgroundRepeat: 'no-repeat'}}    
        
        
    
  )
}

export default Hero
