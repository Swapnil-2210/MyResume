


import React, { useState, useEffect } from 'react';
import './CSS/AboutPage.css';

const AboutPage = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [speechSynthesis, setSpeechSynthesis] = useState(null);

    useEffect(() => {
        if ('speechSynthesis' in window) {
            setSpeechSynthesis(window.speechSynthesis);
        } else {
            console.error('Speech Synthesis API not supported');
        }
    }, []);

    const handleSpeak = () => {
        if (speechSynthesis) {
            const text = "Hello! My name is Swapnil Saravade, and I hold an MSC in Computer Science from Sinhgad College. My expertise lies in web development, where I specialize in HTML, CSS, JavaScript, React, and MySQL. With a strong foundation in these technologies, I am passionate about creating engaging and responsive web applications that enhance user experiences.";
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-IN'; // Set the language to Indian English

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            speechSynthesis.speak(utterance);
        }
    };

    const handleStop = () => {
        if (speechSynthesis) {
            speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    return (
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
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
