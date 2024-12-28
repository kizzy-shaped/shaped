// Modal.tsx
import { useModal } from '@/context/modal';
import { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({
    containerClassName,
    closeBtnClassName,
    closeBtn,
}: {
    containerClassName?: string;
    closeBtnClassName?: string;
    closeBtn?: ReactNode;
}) => {
    const { modal, hideModal } = useModal();

    if (!modal) return null; // No modal to show

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        // onClick={hideModal}
        >
            <div
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className={`bg-white shadow-lg w-[90%] max-w-lg p-0 relative ${containerClassName || ''
                    }`}
            >
                {/* {modal.showCloseButton && (
                    <button
                        className={`absolute top-2 right-2 text-gray-500 hover:text-gray-800 ${closeBtnClassName || ''
                            }`}
                        onClick={hideModal}
                    >
                        {closeBtn || <FaTimes className="w-full h-full" />}
                    </button>
                )} */}
                {modal.content}
            </div>
        </div>
    );
};

export default Modal;
