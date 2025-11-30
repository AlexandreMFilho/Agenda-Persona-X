import React from 'react';

function Divisoria({ altura, children }) {

    return (
        <div
            style={{
                border: '1px solid #000000ff', height: `${altura}%`, width: '100%',
                display: 'flex', flexDirection: 'row',
            }}
        >
            {children}
        </div>
    );
}
export default Divisoria;