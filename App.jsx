import React, { useState, useEffect } from "react";
import "./index.css"; 
import muthootLogo from "./image.png"; 

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
            <img src={muthootLogo} alt="Muthoot Finance Logo" className="logo" />
            <h1> Muthoot Finance - The Future of Banking 🚀</h1>
                <p>AI-Powered | Gamified | Immersive | Next-Gen 💡</p>
                
            </header>

            <main className="content-grid">
                <AIChatbot />
                <VoiceBanking />
                <VRLoanConsultation />
                <PersonalFinanceDashboard />
                <ExclusiveRewards />
                <GamificationZone />
                <CommunityHub />
                <DigitalSignage />
            </main>

            <footer className="app-footer">
                <p>© 2025 Muthoot Finance | Empowering the Future </p>
            </footer>
        </div>
    );
};


const AIChatbot = () => {
    const [messages, setMessages] = useState([{ sender: "bot", text: "👋 Welcome! How can I assist you today?" }]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: "user", text: input }]);
        setTimeout(() => {
            setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: "🤖 I will connect you with an advisor shortly!" }]);
        }, 1000);
        setInput("");
    };

    return (
        <div className="card chatbot red-theme">
            <h2>🤖 AI Chatbot</h2>
            <div className="chat-window">
                {messages.map((msg, i) => (
                    <p key={i} className={`chat-message ${msg.sender}`}>{msg.text}</p>
                ))}
            </div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};


const VoiceBanking = () => {
    const [command, setCommand] = useState("");

    const handleVoiceCommand = () => {
        setCommand("🎙️ Listening...");
        setTimeout(() => setCommand("💰 Your balance is ₹50,000"), 3000);
    };

    return (
        <div className="card voice-banking red-theme">
            <h2>🎤 Voice Banking</h2>
            <button onClick={handleVoiceCommand}>🎙️ Speak Now</button>
            <p><strong>{command}</strong></p>
        </div>
    );
};

const VRLoanConsultation = () => {
    return (
        <div className="card vr-loan red-theme">
            <h2>🕶️ VR Loan Consultation</h2>
            <p>Experience a virtual consultation with a loan officer.</p>
            <button onClick={() => alert("🔴 Launching VR Experience...")}>Start VR</button>
        </div>
    );
};

const PersonalFinanceDashboard = () => {
    const [spending, setSpending] = useState(12000);
    const [suggestions, setSuggestions] = useState("🔴 Save ₹2000 more this month for better financial health.");

    return (
        <div className="card finance-dashboard red-theme">
            <h2>📊 Personal Finance Dashboard</h2>
            <p><strong>Monthly Spending:</strong> ₹{spending}</p>
            <p><strong>Tip:</strong> {suggestions}</p>
            <button onClick={() => setSpending(spending - 1000)}>💰 Save More</button>
        </div>
    );
};


const ExclusiveRewards = () => {
    return (
        <div className="card rewards red-theme">
            <h2>🎁 Youth Offers & Rewards</h2>
            <p>💰 5% Cashback on Gold Loans</p>
            <p>🎉 Earn loyalty points for every transaction</p>
            <button onClick={() => alert("🔴 You earned 50 points!")}>Claim Your Rewards</button>
        </div>
    );
};


const GamificationZone = () => {
    const [score, setScore] = useState(0);

    return (
        <div className="card gamification red-theme">
            <h2>🎮 Finance Quiz Game</h2>
            <p>What is the safest way to invest money?</p>
            <button onClick={() => setScore(score + 10)}>Fixed Deposit ✅</button>
            <button onClick={() => setScore(score - 5)}>Cryptocurrency ❌</button>
            <p>Your Score: <strong>{score}</strong></p>
        </div>
    );
};

const CommunityHub = () => {
    const [events] = useState([
        "📅 Investment Masterclass - Feb 15",
        "📅 Gold Loan Benefits Webinar - March 5",
        "📅 Smart Budgeting for Young Professionals - March 20"
    ]);

    return (
        <div className="card community-hub red-theme">
            <h2>🌍 Community Hub</h2>
            <ul>{events.map((event, index) => <li key={index}>{event}</li>)}</ul>
        </div>
    );
};


const DigitalSignage = () => {
    const [content, setContent] = useState([
        "💰 Special Offer: 0.5% Off on Gold Loans!",
        "🚀 Join Our Financial Bootcamp!",
        "🔔 Gold Prices Are Rising!"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setContent([...content.slice(1), content[0]]);
        }, 5000);
        return () => clearInterval(interval);
    }, [content]);

    return (
        <div className="card digital-signage red-theme">
            <h2>📢 Live Digital Signage</h2>
            <p>{content[0]}</p>
        </div>
    );
};

export default App;
