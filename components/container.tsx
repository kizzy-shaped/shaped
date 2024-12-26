import { ReactNode } from "react";


function Container({ className, children }: { className?: string, children: ReactNode }) {


    return (
        <div className={`w-[97%] wmax_xl:w-[95%] wmin_xl:w-[93%] wmin_3xl:w-[85%] h-full mx-auto ${className}`}>{children}</div>
    )
}

export default Container;