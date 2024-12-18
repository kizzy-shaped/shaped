import { ReactNode } from "react";


function Container({ className, children }: { className?: string, children: ReactNode }) {


    return (
        <div className={`w-[86%] h-full mx-auto ${className}`}>{children}</div>
    )
}

export default Container;