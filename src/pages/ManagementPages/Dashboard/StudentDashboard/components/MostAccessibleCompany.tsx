// import Chart from 'chart.js/auto';
import agl from "/images/agl.jpeg";

function MostAccessibleCompany() {
    

    return(
        <div className={"bg-white shadow-md"}>
            <div className={"flex justify-between"}>
                <p className={"text-[#A3AED0] text-xs"}> Accessible Company </p>
                <div className={"flex"}>
                    <p className={"text-[#05CD99] text-xs"}>2,4%</p>
                    <div className={"w-15"}>
                        <img src={agl} alt="" className={"rounded-circle"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostAccessibleCompany