import React, {useState} from 'react';
import './ToastContainer.css';

function ToastContainer() {
    const [toasts, setToasts] = useState([]);

    const handleAddToast = (message, type) => {
        const id = new Date().getTime();
        const newToast = {
            id: id,
            message: message,
            type: type
        }
        setToasts(prev => [...prev, newToast]);
        setTimeout(() => {
            setToasts(prev => (prev.filter((toast) => {
                return toast.id != id;
            })))
        }, 3000);
    };

    const handleRemoveToast = (toastId) => {
        const newToasts = toasts.filter((toast) => (toast.id != toastId));
        setToasts(newToasts);
    }
    return (
        <div className="container">
            <div className="toast-container">
                {
                    toasts.map((toast) => {
                        return (
                            <div className={`${toast.type} toast`} key={toast.id}>
                                {toast.message}
                                <span onClick={() => handleRemoveToast(toast.id)}>X</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className='btn-container'>
                <button className='success-toast-btn' onClick={() => handleAddToast('Success Alert', 'success')}>
                    Success Toast
                </button>
                <button className='warning-toast-btn' onClick={() => handleAddToast('Warning Alert', 'warning')}>
                    Warning Toast
                </button>
                <button className='info-toast-btn' onClick={() => handleAddToast('Info Alert', 'info')}>
                    Info Toast
                </button>
                <button className='error-toast-btn' onClick={() => handleAddToast('Error Alert', 'error')}>
                    Error Toast
                </button>
            </div>
        </div>
    )
}

export default ToastContainer;
