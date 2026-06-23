
'use client';
import { motion } from 'framer-motion';

export default function WhatsAppBot() {
  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 50 }}>
      <motion.a
        href="https://wa.me/9779747457986"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          display: 'flex',
          itemsCenter: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          borderRadius: '9999px',
          boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer'
        }}
      >
        <svg style={{ width: '28px', height: '28px', fill: 'white' }} viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.917 0c3.161.001 6.132 1.233 8.368 3.472 2.235 2.24 3.461 5.211 3.46 8.377-.003 6.56-5.339 11.908-11.86 11.908-2.006-.001-3.974-.51-5.729-1.479L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.32 1.487 5.353 0 9.709-4.347 9.711-9.713.001-2.599-1.01-5.044-2.85-6.887C17.035 2.194 14.594 1.18 11.914 1.18 6.56 1.18 2.205 5.528 2.203 10.894c-.001 2.103.551 4.11 1.599 5.925l-.993 3.626 3.838-.991z"/>
        </svg>
      </motion.a>
    </div>
  );
}
