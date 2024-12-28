import { ReactNode } from "react";


function Container({ className, children }: { className?: string, children: ReactNode }) {


    return (
        <div className={`wmax_390:w-[100%] wmax_xl:w-[85%] wmin_xl:w-[80%] wmin_3xl:w-[85%] h-full mx-auto ${className}`}>{children}</div>
    )
}

export default Container;