'use client'

import { createContext, ReactNode, useContext, useState } from "react";


interface IHeaderContext {
    dropdownVisible: boolean,
    setDropdownVisible: (value: boolean) => void
}

const HeaderContext = createContext<IHeaderContext | undefined>(undefined);

function HeaderProvider({ children }: { children: ReactNode }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <HeaderContext.Provider value={{ dropdownVisible, setDropdownVisible }}>{children}</HeaderContext.Provider>
    )
}

export default HeaderProvider;

export function useHeaderContext() {
    const context = useContext(HeaderContext);

    if (context) return context;
    else throw new Error('HeaderProvider must be wrapped in a base container!')
}
