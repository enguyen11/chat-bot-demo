import { FaRobot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import './index.css';

function Chatbot() {
    return (
        <>
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
                    <textarea placeholder="Enter your message here..."></textarea>
                    <span id="send-btn"><IoMdSend /></span>
                </div>
            </div>
        </>
    );
}

export default Chatbot;