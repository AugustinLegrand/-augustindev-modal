import React from 'react'
import './Modal.css'

interface ModalProps {
    content: string
    show: boolean,
    onClose: () => void
}

export const Modal = ({
    content,
    show,
    onClose
}: ModalProps) => {
    return (
        <div className={`modal ${show ? 'modal-show' : ''}`}>
            <div className='modal-background'>-</div>
            <div className='modal-body'>
                <p className="modal-content">{ content }</p>
                <button type="button" className="modal-buttonclose" onClick={() => onClose()}>
                    X
                </button>
            </div>
        </div>
    )
}
