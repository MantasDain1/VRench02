import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, AlertCircle, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

const GeminiAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm your VRench Career & Safety Advisor. Ask me about VR training modules, safety protocols for heavy machinery, or career paths in blue-collar trades.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key is missing. Please check your environment variables.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are a helpful, professional expert advisor for "VRench", a Virtual Reality training platform for blue-collar workers.
      Your goal is to assist students (18-25yo) and employers in understanding the benefits of VR training, safety procedures, and career paths in construction, plumbing, and warehousing.
      
      Key knowledge:
      - VRench offers courses like Heavy Machinery, Forklift Ops, Plumbing.
      - Safety is the #1 priority. VR allows "zero risk" training.
      - VRench cuts training time by ~40%.
      
      Tone: Encouraging, knowledgeable, safety-conscious, and professional.
      Format: Keep answers concise (under 150 words) unless asked for a detailed guide. Use formatting (bullet points) for readability.`;

      // Streaming response
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: userMessage.text }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      let fullText = '';
      const modelMsgId = (Date.now() + 1).toString();
      
      // Add placeholder for model response
      setMessages(prev => [...prev, {
        id: modelMsgId,
        role: 'model',
        text: '',
        timestamp: new Date(),
        isThinking: true
      }]);

      for await (const chunk of responseStream) {
        if (chunk.text) {
          fullText += chunk.text;
          setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId 
              ? { ...msg, text: fullText, isThinking: false } 
              : msg
          ));
        }
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong connecting to the advisor.");
      // Remove the thinking message if it exists/failed
      setMessages(prev => prev.filter(msg => !msg.isThinking));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-64px)] flex flex-col">
      <div className="flex-none mb-4 text-center">
        <h2 className="text-2xl font-bold text-white flex items-center justify-center">
          <Bot className="w-8 h-8 text-lime-400 mr-2" />
          VRench Advisor
        </h2>
        <p className="text-zinc-500">Powered by Gemini 2.5 Flash</p>
      </div>

      <div className="flex-1 bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 overflow-hidden flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-3 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-lime-500 text-black rounded-br-none font-medium' 
                    : 'bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none'
                }`}
              >
                {/* Simple Markdown-like rendering for line breaks */}
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                </div>
                {msg.isThinking && (
                   <span className="flex items-center mt-2 text-xs opacity-75">
                      <Loader2 className="w-3 h-3 animate-spin mr-1" />
                      Thinking...
                   </span>
                )}
              </div>
            </div>
          ))}
          {error && (
            <div className="flex justify-center my-4">
              <div className="bg-red-900/20 text-red-400 px-4 py-2 rounded-lg text-sm flex items-center border border-red-900/50">
                <AlertCircle className="w-4 h-4 mr-2" />
                {error}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about heavy machinery safety..."
              className="flex-1 bg-black border border-zinc-700 text-white placeholder-zinc-500 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-shadow text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputText.trim()}
              className="bg-lime-500 text-black p-3 rounded-full hover:bg-lime-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-lime-500/20"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-center text-xs text-zinc-600 mt-2">
            AI can make mistakes. Always consult official safety manuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;