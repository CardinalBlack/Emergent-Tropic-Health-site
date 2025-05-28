import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, User, Bot } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAuth } from '../App';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const messagesEndRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    loadChatHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadChatHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/chat/history`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const formattedMessages = [];
        
        data.messages.reverse().forEach(msg => {
          formattedMessages.push({ text: msg.message, sender: 'user', timestamp: msg.timestamp });
          formattedMessages.push({ text: msg.response, sender: 'ai', timestamp: msg.timestamp });
        });
        
        setMessages(formattedMessages);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    } finally {
      setLoadingHistory(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || loading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // Add user message to chat
    const newUserMessage = { text: userMessage, sender: 'user', timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, newUserMessage]);
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();

      if (response.ok) {
        const aiMessage = { text: data.response, sender: 'ai', timestamp: new Date().toISOString() };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        toast.error(data.detail || 'Failed to get response');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loadingHistory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your chat with Dr. Laury...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4 h-full">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl h-[calc(100vh-8rem)] flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white p-6 rounded-t-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Dr. Laury Masters, ND-AI</h1>
                <p className="text-purple-100">Your AI Naturopathic Doctor</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Welcome to your consultation with Dr. Laury Masters!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  I'm here to help you with holistic health guidance, natural healing approaches, 
                  and personalized wellness strategies. What health concern would you like to discuss today?
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-purple-700' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-4 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-purple-700 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-gray-600 text-sm">Dr. Laury is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t p-6">
            <form onSubmit={handleSendMessage} className="flex space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask Dr. Laury about your health concerns..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows="3"
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !inputMessage.trim()}
                className="bg-gradient-to-r from-purple-700 to-pink-700 text-white p-4 rounded-xl hover:from-purple-800 hover:to-pink-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;