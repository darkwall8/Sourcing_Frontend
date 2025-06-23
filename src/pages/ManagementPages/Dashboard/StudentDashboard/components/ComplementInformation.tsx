import dollars from "/icons/dollars.svg"
import stat from "/icons/Stat.svg"
import file from "/icons/File.svg"

function ComplementInformation() {
    return(
        <>
            <div className={"bg-white rounded-2xl shadow-md p-3 pt-5 pb-5 flex items-center gap-2"}>
                <div className={"w-12 h-12"}>
                    <img src={dollars} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-xs"}>Paid internship</p>
                    <p className={"text-[#2B3674] font-semibold text-xl"}>15</p>
                </div>
            </div>
            <div className={"bg-white rounded-2xl shadow-md p-3 pt-5 pb-5 mt-2 mb-2 flex items-center gap-2"}>
                <div className={"w-12 h-12"}>
                    <img src={stat} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-xs"}>Favorites</p>
                    <p className={"text-[#2B3674] font-semibold text-xl"}>8</p>
                </div>
            </div>
            <div className={"bg-white rounded-2xl shadow-md p-3 pt-5 pb-5 mt-2 mb-2 flex items-center gap-2"}>
                <div className={"w-12 h-12"}>
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