import { FaRobot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import './index.css';
import { CiChat1 } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Chatbot() {
    const [chatOpen, setChatOpen] = useState(false);

    const handleChatToggle= () => {
        setChatOpen(!chatOpen);
    }
    return (
        <>
            { chatOpen &&
                <div className="chat">
                    <header className="chat-label">
                        <h2>Chat</h2>
                    </header>
                    <ul className="chatbox">
                        <li className="chat-msg chatbot-msg">
                            <span className="icon"><FaRobot /></span>
                            <p>Hi there, how may I help you? <br/> Hello World</p>
                        </li>
                        <li className="chat-msg user-msg">
                            <p>Something something something</p>
                        </li>
                    </ul>
                    <div className="chat-input">
                        <textarea placeholder="Enter your message here..." required ></textarea>
                        <span id="send-btn"><IoMdSend /></span>
                    </div>
                </div>
            }
            
            <div>
                { chatOpen ?
                    <button className="toggle-chat-btn" title="Close Chatbot" onClick={() => {
                        handleChatToggle();
                    }}>
                        <IoCloseSharp />
                    </button> 
                    : <button className="toggle-chat-btn" title="Open a chat with a bot" onClick={() => {
                        handleChatToggle();
                    }}>
                        <CiChat1 />
                    </button>
                }
            </div>
            
        </>
    );
}

export default Chatbot;