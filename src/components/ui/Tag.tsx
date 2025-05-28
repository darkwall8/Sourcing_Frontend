function Tag( { label } : { label: string } ) {
    return (
        <div className="bg-primary py-1 px-4 rounded-md text-white text-sm w-fit">{ label }</div>
    )
}

export default Tag;