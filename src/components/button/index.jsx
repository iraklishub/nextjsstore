import clsx from 'clsx'

const Button = ({ type, variant, onClick, disabled, className, children }) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'rounded px-11 py-2',
        variant === 'primary' && 'bg-white border border-[#3E5673]',
        variant === 'secondary' && 'bg-[#3D5572] text-white',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
