import { FaRobot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import './index.css';
import { CiChat1 } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


function Chatbot() {
    const [chatOpen, setChatOpen] = useState(false);
    const [outgoingMsg, setOutgoingMsg] = useState("");
    const [messages, setMessages] = useState([{ sender: "bot", text: "Hi there, how may I help you?" }]);

    const sendBtnVisibility = document.getElementById('send-btn');

    const apiKey = import.meta.env.VITE_AI_API_BASE;
    const genAI = new GoogleGenerativeAI(`${apiKey}`);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleChatToggle = () => {
        setChatOpen(!chatOpen);
    }

    const handleOutgoingMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setOutgoingMsg(e.target.value);

        if (e.target.value.trim().length !== 0 && sendBtnVisibility !== null) {
            sendBtnVisibility.style.visibility = 'visible';
        }else if (sendBtnVisibility !== null) {
            sendBtnVisibility.style.visibility = 'hidden';
        }
    }

    const handleSendMsg = async () => {
        if (outgoingMsg.trim() && sendBtnVisibility !== null) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "user", text: outgoingMsg }
            ]);
            setOutgoingMsg(""); 
            sendBtnVisibility.style.visibility = 'hidden';
    
            await generateResponse();
        }
    };
    
    const generateResponse = async () => {
        try {
            const result = await model.generateContent(outgoingMsg);
            const botResponse = result.response.text(); 
            setMessages((prevMessages) => [
                ...prevMessages, 
                { sender: "bot", text: botResponse }
            ]);
        } catch (error) {
            console.error("Error generating response:", error);
        }
    };
    
    return (
        <>
            { chatOpen &&
                <div className="chat">
                    <header className="chat-label">
                        <h2>Chat</h2>
                    </header>
                    <ul className="chatbox">
                        {messages.map((msg, index) => (
                            <li key={index} className={`chat-msg ${msg.sender}-msg`}>
                                {msg.sender === "bot" && <span className="icon"><FaRobot /></span>}
                            <p>{msg.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="chat-input">
                        <textarea placeholder="Enter your message here..." required 
                        value={outgoingMsg} onChange={(e) => handleOutgoingMsg(e)}>

                        </textarea>
                        <span id="send-btn" onClick={() => {
                            handleSendMsg();
                        }}><IoMdSend /></span>
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