// import { useTranslation } from "react-i18next";
import { useState} from "react";

function Chats() {

    // const { t } = useTranslation();

    const [listChat, setListChat] = useState([
        { title: "AGL", icon: "/icons/dashboard.svg", isSelected: false },
        { title: "MTN CAMEROON", icon: "/icons/datalist.svg", isSelected: false },
        { title: "ORANGE CAMEROUN", icon: "/icons/chat.svg", isSelected: false },
    ]);

    function setSelectedChat(chatId: number) {
        setListChat(prevChats =>
            prevChats.map((chat, _index) => ({
                ...chat,
                isSelected: _index === chatId,
            }))
        );
    }

    return (
        <div className="flex">
            <div className="w-[25vw] p-4 space-y-9 border border-usual_light_purple h-full">
                <div className={"space-y-10"}>
                    <p>Chats</p>
                    <p className="text-usual_purple text-end">CHAT +</p>
                </div>
                <div className={"space-y-2"}>
                    {listChat.map((chat, idx) => (
                        <div
                            key={chat.title}
                            className={`flex items-center gap-2 p-3 bg-white ${chat.isSelected ? "border border-usual_light_purple shadow-[0_0_10px_rgba(213,218,241)]" : ""}`}
                            onClick={() => setSelectedChat(idx)}
                        >
                            <img src={chat.icon} alt={chat.title} className="w-10" />
                            {chat.title}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className={"flex items-center justify-between h-30 border-b border-usual_light_purple w-[55vw]"}>
                    {listChat.map((chat, idx) => (
                        <div
                            key={chat.title}
                            className={`flex items-center gap-2 p-3 ${chat.isSelected ? "" : "hidden"} w-[55vw] justify-between`}
                            onClick={() => setSelectedChat(idx)}
                        >
                            <div className="flex items-center gap-2 p-3">
                                <img src={chat.icon} alt={chat.title} className="w-10" />
                                {chat.title}
                            </div>
                            <div className={"flex w-5 h-5 rounded-4xl bg-primary justify-center items-center p-2"}>
                                <p className={"text-white"}>!</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Chats;