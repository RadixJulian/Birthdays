"use client"
import Countdown from "./countdown";

export default function Header() {
    const n = new Date();
    const y = n.getFullYear();
    const m = n.getMonth() + 1;
    const d = n.getDate();
    const name = "Bella";
  
    return (
      <>
        <style jsx>{`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
  
          .animated-gradient {
            animation: gradientAnimation 10s linear infinite;
          }
        `}</style>
  
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 animated-gradient">
          <div className="w-full max-w-md p-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl text-center text-white bg-primary p-2 rounded-t-md mb-4">
                🎂 Birthday Info 🎂
              </h1>
              <div className="mb-6 text-lg md:text-xl text-center text-black font-semibold">
                <p>
                  Current Date: {m}/{d}/{y}
                </p>
                <p>
                  Next Birthday: <span className="text-primary font-semibold">{name}</span>
                </p>
              </div>
              <Countdown />
            </div>
          </div>
        </div>
      </>
    );
  }
