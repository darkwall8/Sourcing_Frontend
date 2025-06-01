import Check from "/icons/check.svg";

function list() {
    return (
        <>
            <div id={"enterprise_list"} className="border border-usual_light_purple h-screen w-90 space-y-5">
                <div className={"p-5 space-y-7"}>
                    <p className="">Chats</p>
                    <p className="text-end text-usual_purple">CHAT +</p>
                </div>
                <div className={""}>
                    <div className={" border flex gap-5 m-3 p-3 items-center  bg-white"}>
                        <div>
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                        </div>
                        <p>AGL</p>
                    </div>
                    <div className={"flex gap-5 m-3 p-3 items-center  bg-white"}>
                        <div>
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                        </div>
                        <p>AGL</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default list;