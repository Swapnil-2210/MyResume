// import React from 'react';
// import './CSS/AboutPage.css'
// import { useSpeechSynthesis } from 'react-speech-kit';

// const AboutPage = () => {

//     const { speak } = useSpeechSynthesis();
    

//     const handleSpeak = () => {
//         const text = "Hello! My name is Swapnil Saravade, and I hold an MSC in Computer Science from Sinhgad College. My expertise lies in web development, where I specialize in HTML, CSS, JavaScript, React, and MySQL. With a strong foundation in these technologies, I am passionate about creating engaging and responsive web applications that enhance user experiences.";
//         speak({ text });
//     };

//     return (
//         <>
//         <div className='APBGImage'>
//             <div className='APMainContainer'>
//                 <h1 id='___Heading1'>INTRODUCTION</h1>

//                 <p id='___APPara'>
//                                         Hello 👋 ! My name is Swapnil Saravade, 
//                 and I hold an MSC in Computer Science 🧑‍💻 from Sinhgad College.
//                 My expertise lies in web  development, where I specialize in HTML, CSS, JavaScript, React, and MySQL.
//                 With a strong foundation in these technologies, I am passionate about creating engaging and 
//                 responsive web applications that enhance user experiences.
//                 <button onClick={handleSpeak}>🔊</button>
//                 </p>
                    
//             </div>
//         </div>
//         </>
//     );
// }

// export default AboutPage;







import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './CSS/AboutPage.css';


const AboutPage = () => {
    const { speak, cancel, speaking } = useSpeechSynthesis();
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleSpeak = () => {
        const text = "Hello! My name is Swapnil Saravade, and I hold an MSC in Computer Science from Sinhgad College. My expertise lies in web development, where I specialize in HTML, CSS, JavaScript, React, and MySQL. With a strong foundation in these technologies, I am passionate about creating engaging and responsive web applications that enhance user experiences.";
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-IN'; // Set the language to Indian English
        speech.voice = getIndianEnglishVoice(); // Get an Indian English speaking voice
        window.speechSynthesis.speak(speech);
        setIsSpeaking(true);
      };
    
      const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      };
    
      const getIndianEnglishVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const indianEnglishVoices = voices.filter(voice => voice.lang === 'en-IN');
        return indianEnglishVoices[0]; // Return the first Indian English speaking voice
      };

    return (
        <>
            <div className='APBGImage'>
                <div className='APMainContainer'>
                    <h1 id='___Heading1'>INTRODUCTION</h1>

                    <p id='___APPara'>
                        Hello 👋 ! My name is Swapnil Saravade, 
                        and I hold an MSC in Computer Science 🧑‍💻 from Sinhgad College.
                        My expertise lies in web development, where I specialize in HTML, CSS, JavaScript, React, and MySQL.
                        With a strong foundation in these technologies, I am passionate about creating engaging and 
                        responsive web applications that enhance user experiences.
                        <button onClick={handleSpeak} disabled={isSpeaking} className='SB'>🔊</button>
                        <button onClick={handleStop} disabled={!isSpeaking} className='SB'>🔇</button>

                        {/* <button onClick={handleSpeak} disabled={isSpeaking} className='SB' aria-label="Speak">🔊 Speak</button> */}
                        {/* <button onClick={handleStop} disabled={!isSpeaking} className='SB' aria-label="Stop">🔇 Stop</button> */}

                    </p>
                    
                   
                {/* <img src={HTML}/> */}
                </div>
            </div>
        </>
    );
}

export default AboutPage;
