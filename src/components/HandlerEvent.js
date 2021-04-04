
const Counter = ({className}) => {
    return  (
        <span className={`text-dark-vdgb font-josefin text-sm font-bold ${className}`}>5 items left</span>
    )
}

const Status = ({className}) => {
    return (
        <div className={`text-center ${className}`}>
            <button className="font-josefin px-2.5 text-sm font-bold text-brightBlue">All</button>
            <button className="text-dark-dgb font-josefin px-2.5 text-sm font-bold">Active</button>
            <button className="text-dark-dgb font-josefin px-2.5 text-sm font-bold">Completed</button>
        </div>
    )
}

const Clear = ({className}) => {
    return (
        <button className=" font-josefin text-dark-vdgb text-sm font-bold">Clear Completed</button>
    )
}

const HandlerEvent = () => {
    return (
        <div className="w-full flex items-center py-4 px-5">
            <Counter className="justify-items-stretch" />
            <Status className="justify-items-stretch flex-auto" />
            <Clear className="justify-items-stretch" />
        </div>
    )
}

export default HandlerEvent;