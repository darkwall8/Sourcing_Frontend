function Button( { label, handleClick, styleIndex, isActivated } : { label: string, handleClick: () => void, styleIndex: number, isActivated: boolean } ) {
    return (
        styleIndex == 0 ?
        <div className={`${ isActivated ? "bg-primary hover:bg-primary/80 text-white" : "bg-gray-300" }  w-fit px-4 py-2 shadow-md rounded-lg cursor-pointer transition-all duration-150 ease-in-out`} onClick={() => isActivated ? handleClick() : null}>{ label }</div>
        : styleIndex == 1 ?
        <div className={`${ isActivated ? "bg-white hover:bg-primary/5 text-primary" : "bg-gray-300 text-white" }  w-fit px-4 py-2 shadow-md rounded-lg  cursor-pointer transition-all duration-150 ease-in-out`} onClick={() => isActivated ? handleClick() : null}>{ label }</div>
        :
        <div></div>
    )
}

export default Button;