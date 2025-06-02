import { useState } from "react";
import { useTranslation } from "react-i18next";


function Chats() {

    const chatList = [
        { title: "AGL", subtitle: "Manufacture,Logistics and Importation", icon: "/icons/chat.svg" },
        { title: "MTN", subtitle: "", icon: "/icons/chat.svg" },
        { title: "SOCOPAO", subtitle: "", icon: "/icons/chat.svg" },
        { title: "Camrail", subtitle: "", icon: "/icons/chat.svg" },
        { title: "HYSACAM", subtitle: "", icon: "/icons/chat.svg" },
        { title: "UCAC-ICAM", subtitle: "", icon: "/icons/chat.svg" },
        { title: "ORANGE CM", subtitle: "", icon: "/icons/chat.svg" }
    ];

    interface ChatMessages {
        [companyName: string]: {
          from: string;
          text: string;
        }[];
      }

    const initialMessages: ChatMessages = {
        AGL: [
            { from: "them", text: "Bonjour, bienvenue chez AGL !" },
            { from: "me", text: "Merci, j'aimerais en savoir plus sur vos services." }
        ],
        MTN: [{ from: "them", text: "Bonjour, comment pouvons-nous vous aider chez MTN ?" }],
        SOCOPAO: [],
        Camrail: [],
        HYSACAM: [],
        "UCAC-ICAM": [],
        "ORANGE CM": []
    };

    const { t } = useTranslation();
    const [selectedChat, setSelectedChat] = useState(0);
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");
    const currentCompany = chatList[selectedChat].title;

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;

        setMessages((prev) => ({
            ...prev,
            [currentCompany]: [...prev[currentCompany], { from: "me", text: newMessage }]
        }));
        setNewMessage("");
    };

    return (
        <div className="flex h-full text-sm">
            <aside className="w-[20vw] border-r border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Chats</h2>
                    <button className="text-primary font-medium hover:underline">CHAT +</button>
                </div>
                <div className="flex flex-col gap-1 overflow-y-auto">
                    {chatList.map((chat, index) => (
                        <div
                            key={chat.title}
                            onClick={() => setSelectedChat(index)}
                            className={`flex border border-transparent items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-primary/20 transition-all ${selectedChat === index ? "!border-primary bg-primary/20 shadow-md" : ""
                                }`}
                        >
                            <img src={chat.icon} alt={chat.title} className="w-8 h-8 object-contain" />
                            <span className="font-medium text-sm truncate">{chat.title}</span>
                        </div>
                    ))}
                </div>
            </aside>

            <main className="flex-1 flex flex-col">
                <header className="flex items-center justify-between border-b border-gray-200 p-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={chatList[selectedChat].icon}
                            alt={chatList[selectedChat].title}
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{chatList[selectedChat].title}</h3>
                            {chatList[selectedChat].subtitle && (
                                <p className="text-xs text-gray-500">{chatList[selectedChat].subtitle}</p>
                            )}
                        </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                        !
                    </div>
                </header>

                <div className="flex flex-col h-full gap-4 bg-gray-50 p-4 space-y-3 overflow-y-auto">
                    {messages[currentCompany].length === 0 ? (
                        <p className="text-center text-gray-400 italic">Aucun message pour le moment.</p>
                    ) : (
                        messages[currentCompany].map((msg, idx) => (
                            <div className={`${msg.from == 'me' ? "flex justify-end" : "flex justify-start"}`}>
                                <div
                                    key={idx}
                                    className={`max-w-3/4 px-4 py-2 rounded-lg ${msg.from === "me"
                                            ? "bg-primary text-white w-fit ml-auto"
                                            : "bg-white border w-fit border-gray-200 text-left"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))
                    )}

                </div>

                <div className="p-4 border-t border-gray-200 flex items-center gap-2">
                    <input
                        type="text"
                        placeholder={t("dashboard.chat.write_your_message")}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-primary hover:bg-primary cursor-pointer transition text-white px-4 py-2 rounded-md"
                    >
                        ➤
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Chats;
