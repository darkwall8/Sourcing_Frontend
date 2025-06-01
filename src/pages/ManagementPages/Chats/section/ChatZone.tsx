import Check from "/icons/check.svg";


function ChatZone () {
    return (
        <>
            <div className={"flex p-10 justify-between items-center gap-3 w-full border-b"}>
                <div className={"flex items-center"}>
                    <img src={Check}
                         className="border-none bg-primary p-2 w-10 h-10 aspect-square"
                         alt="Check"
                    />
                    <div>
                        <p>AGL</p>
                        <p>Description</p>
                    </div>
                </div>
                <div className={"bg-primary border-none rounded-4xl w-5 h-5 flex items-center justify-center p-2"}>
                    <p className={"text-white"}>i</p>
                </div>
            </div>
        </>
    )
}

export default ChatZone