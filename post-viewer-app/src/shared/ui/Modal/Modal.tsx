import { useEffect, createContext, useContext } from 'react';
import type { ReactNode} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
        
interface ModalContextValue {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
};

const ModalHeader = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);
  
  if (!context) throw new Error('ModalHeader must be used within a Modal');
  
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{children}</h2>
      <button className={styles.close} onClick={context.onClose}>
        ×
      </button>
    </div>
  );
};

const ModalBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return <div className={styles.footer}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;