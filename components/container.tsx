import { ReactNode } from "react";


function Container({ className, children }: { className?: string, children: ReactNode }) {


    return (
        <div className={`wmax_390:w-[98%] wmax_xl:w-[95%] wmin_xl:w-[92%] wmin_3xl:w-[90%] h-full mx-auto ${className}`}>{children}</div>
    )
}

export default Container;