import React, { useRef } from 'react';

export default function RenderJSON({ data }) {
    const dialogRef = useRef(null);

    const abrirModal = () => dialogRef.current?.showModal();
    const fecharModal = () => dialogRef.current?.close();

    return (
        <>
            <button style={{backgroundColor: '#007acc', color: '#fff'}}  onClick={abrirModal}>Exibir</button>
            <dialog ref={dialogRef} style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                margin: '0',
                borderRadius: '4px 4px 0 0'
            }}>
                <button style={{backgroundColor: '#007acc', color: '#fff'}}onClick={fecharModal}>Fechar</button>
                <section className="render-json-content">
                    <pre style={{ 
                        whiteSpace: 'pre-wrap', 
                        wordBreak: 'break-word',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        padding: '16px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '4px',
                        maxHeight: '70vh',
                        overflow: 'auto',
                        textAlign: 'left'
                    }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </section>
            </dialog>
        </>
    );
}
