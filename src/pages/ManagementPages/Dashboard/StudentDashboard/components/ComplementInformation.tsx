import dollars from "/icons/dollars.svg"
import stat from "/icons/Stat.svg"
import file from "/icons/File.svg"

function ComplementInformation() {
    return(
        <>
            <div className={"bg-white rounded-2xl shadow-md p-3.5 flex items-center gap-4"}>
                <div className={"w-10 h-10"}>
                    <img src={dollars} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-xs"}>Paid internship</p>
                    <p className={"text-[#2B3674] font-semibold text-xl"}>15</p>
                </div>
            </div>
            <div className={"bg-white rounded-2xl shadow-md p-3.5 mt-3 mb-3 flex items-center gap-4"}>
                <div className={"w-10 h-10"}>
                    <img src={stat} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-xs"}>Favorites</p>
                    <p className={"text-[#2B3674] font-semibold text-xl"}>8</p>
                </div>
            </div>
            <div className={"bg-white rounded-2xl shadow-md p-3.5 mt-3 flex items-center gap-4"}>
                <div className={"w-10 h-10"}>
                    <img src={file} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-xs"}>Total Request</p>
                    <p className={"text-[#2B3674] font-semibold text-xl"}>25</p>
                </div>
            </div>
        </>
    )
}

export default ComplementInformation