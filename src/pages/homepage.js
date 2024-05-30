import Header from './components/Header'
import Footer from './components/Footer'

const Homepage = () => {
    return (
      <div>
        <Header/>
        <div className="py-20 px-20 bg-black min-h-screen flex flex-col text-white font-serif relative overflow-hidden">
        <div className="flex flex-col gap-10 relative z-10 p-4">
          <div className="inline-flex items-center gap-4 mb-4">
            <h2 className="font-primary font-semibold text-lg bg-gradient-to-r from-indigo-700 to-purple-900 inline-block text-transparent bg-clip-text">NFT SHOPPY</h2>
            <hr className="w-10 h-0.5 border-0 bg-gradient-to-r from-indigo-700 to-purple-900"></hr>
          </div>
          <h1 className="font-primary text-7xl leading-5 font-bold mb-4">Discover, collect,</h1>
          <h1  className="font-primary text-7xl leading-5 font-bold mb-4">and sell </h1>
          <h1  className="font-primary text-7xl leading-5 font-bold mb-4">extraordinary NFTs</h1>
          <p className="font-primary text-lg text-zinc-500 mb-10">Explore on the world's best & largest NFT marketplace</p>
          <div className="flex gap-5 -translate-y-10">
            <button className="font-primary h-12 w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Explore
            </button>
            <button className="font-primary h-12 w-36 border-solid bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Create
            </button>
          </div>
        </div>
        <div className="absolute inset-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1" className="w-full h-full">
            <defs>
              <linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1">
                <stop stopColor="rgba(69,40,220, 0.15)" offset="0%"></stop>
                <stop stopColor="rgba(87,4,138, 0.15)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon fill="url(#linearGradient-1)">
                <animate 
                  id="graph-animation" 
                  xmlns="http://www.w3.org/2000/svg" 
                  dur="1.5s" 
                  attributeName="points" 
                  values="
                    0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 
                    0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" 
                  fill="freeze" 
                ></animate>
              </polygon>
            </g>
          </svg>
        </div>
      </div>
        <Footer/>
      </div>
    );
  }
  
  export default Homepage;
  