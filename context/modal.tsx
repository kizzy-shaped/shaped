// modal.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalInstance {
    content: ReactNode;
    showCloseButton: boolean;
}

interface ModalContextType {
    modal: ModalInstance | null;
    showModal: (content: ReactNode, showCloseButton?: boolean) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<ModalInstance | null>(null);

    const showModal = (content: ReactNode, showCloseButton = true) => {
        setModal({ content, showCloseButton });
    };

    const hideModal = () => {
        setModal(null);
    };

    return (
        <ModalContext.Provider value={{ modal, showModal, hideModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
