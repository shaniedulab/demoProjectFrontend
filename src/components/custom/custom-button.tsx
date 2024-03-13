// "use client"
import React from 'react'

type CButtonProps = {
    children:React.ReactNode
    type?: "submit" | "reset" | "button" | undefined
    onClick: () => void
    icon?: React.ReactNode;
    tooltip?: string;
    style?: React.CSSProperties;
    className?: string;
    isLoading?: boolean;
}
function CButton({children, type, onClick, icon, style, tooltip, className='', isLoading}:CButtonProps) {
  return (
    <>
        <button type={type} 
            onClick={onClick} 
            style={style}
            title={tooltip}
            className={`border-2 p-2 px-4 hover:bg-blue-700 text-white bg-blue-600 rounded-md ${className}`}
        >
            <span className='flex'>
                {isLoading && 'Loading...'}
                {icon && <span>{icon}</span>}
                <span>{children}</span>
            </span>
        </button>
    </>
  )
}

export default CButton