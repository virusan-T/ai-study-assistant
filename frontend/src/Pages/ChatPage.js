import React, { useState } from 'react';

function ChatPage() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: 'user',
      text: question,
    };

    const aiMessage = {
      sender: 'ai',
      text: 'This is a sample AI response.',
    };

    setMessages([...messages, userMessage, aiMessage]);
    setQuestion('');
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-card">
        <h1 className="title">AI Chat Assistant</h1>
        <p className="chat-subtext">
          Ask questions about your uploaded notes.
        </p>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <p className="text">No messages yet. Start asking something.</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === 'user' ? 'message user-message' : 'message ai-message'}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            className="input-field chat-input"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button className="btn-primary" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;