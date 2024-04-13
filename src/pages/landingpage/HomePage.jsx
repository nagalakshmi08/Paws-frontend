import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Homepage.module.css";
import { TypeAnimation } from 'react-type-animation';
import { FaStar } from 'react-icons/fa';


const stars = Array.from({ length: 55 /*no of stars*/ }, (_, i) => (
    <FaStar
        key={i}
        className="absolute text-white animate-ping opacity-75"
        style={{
            top: `${Math.random() * 75}vh`,
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * 1.5}rem`, /*size*/
            animationDuration: `${Math.random() * 30}s`, /*how long star should stay*/
        }}
    />
));

function LandingPage() {
    const navigate = useNavigate();
    const csrftoken = localStorage.getItem('csrftoken');
    const userType = localStorage.getItem('userType');

    useEffect(() => {
        if (csrftoken && userType === "ngo") {
            navigate('/stats');
        }
    }, [csrftoken, userType, navigate]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'manipulation';
        return () => {
          document.body.style.overflow = '';
          document.body.style.touchAction = '';
        };
      }, []);

    return (
    <div className="z-[-2] h-screen bg-custom-gradient w-full flex flex-col items-center font-Calistoga">
        {stars}
        <div className="flex flex-col items-center justify-between h-[70vh] gap-3">
            <div className="flex flex-col items-center h-fit gap-2">
                <div className="mt-[50px] relative">
                    <img className="w-40 absolute z-4 top-[-23px] right-[5px]" src="./images/t1.png" alt="" />
                    <h2 className={`${styles.heading} font-Calistoga tracking-wider`}>Paws</h2>
                </div>
                    <img
                        className="mx-auto my-auto w-72 h-72 backdrop-blur-md"
                        src="./images/paws.png"
                        alt="Paws"
                    />
                <TypeAnimation
                    sequence={[
                        "Pause to save some Paws.",
                        1000,
                        " ",
                        1000,
                        "Pause to save some Paws.",
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '24px', letterSpacing: '0.1rem', display: 'inline-block', fontWeight: 'bold' }}
                    repeat={Infinity}
                />
                <div>
                    {/* SAVE LIVES */}
                    <p className="text-[18px] p-4 font-baijam drop-shadow-lg tracking-wider">
                        "Save lives - report injured animals to authorities. Click below to notify and make a difference."
                    </p>
                </div>
            </div>
            {/* BUTTON */}
            <div className="relative mt-5">
                <img className="w-40 absolute z-4 top-[-50px] right-[15px]" src="./images/t2.png" alt=""></img>
                <button
                    type='submit'
                    className="bg-gradient-to-b m-3 from-[#48dc08] to-[#3bad0a] text-white focus:outline-none rounded-[40px] shadow-buttonShadow py-4 font-semibold tracking-widest text-[2rem] px-10"
                >
                    <Link to="/report-incident">Report</Link>
                </button>
            </div>
        </div>
    </div>
);}

export default LandingPage;