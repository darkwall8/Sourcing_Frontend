// import Chart from 'chart.js/auto';
import agl from "/images/agl.jpeg";
// import drop_up from "/icons/arrow_drop_up.svg";
// import drop_down from "/icons/arrow_drop_down.svg";
import BarChart from "./BarChart";

function MostAccessibleCompany() {
    

    return(
        <div className={"bg-white shadow-md"}>
            <div className={"flex justify-between"}>
                <p className={"text-[#A3AED0] text-xs"}> Accessible Company </p>
                <div className={"flex"}>
                    <div className="flex items-center gap-1">
                        {/* {""="" ? (
                                <div>
                                    <img src={drop_up} alt="" className={"w-5 h-5"}/>
                                </div>
                            ):(
                                <div>
                                    <img src={drop_down} alt="" className={"w-5 h-5"}/>
                                </div>
                            )
                        } */}
                        <p className={"text-[#05CD99] text-xs font-semibold"}> + 2,4%</p>
                    </div>
                    <div className={"w-15"}>
                        <img src={agl} alt="" className={"rounded-circle"}/>
                    </div>
                </div>
            </div>
            <div>
                <BarChart/>
            </div>
        </div>
    )
}

export default MostAccessibleCompany