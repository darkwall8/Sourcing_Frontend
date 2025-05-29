function Tag({ label, isCloseButton, onClick }: { label: string, isCloseButton?: boolean, onClick?: () => void }) {
    return (
        <>
            <div className="bg-primary py-1 px-4 rounded-md text-white text-sm w-fit flex items-center justify-between gap-4">{label} <span onClick={onClick} className={`${isCloseButton ? "flex" : "hidden"} hover:text-black hover:bg-white transition-all duration-150 ease-in-out cursor-pointer w-4 h-4 items-center justify-center rounded-full`}>&times;</span></div>
        </>
    )
}

export default Tag;