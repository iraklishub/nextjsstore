const Badge = ({ title, className }) => {
  return (
    <div className={`rounded-full absolute flex align-center justify-center text-xs bg-red-500 text-neutral-50 w-4 h-4 ${className || ''}`}>
      {title}
    </div>
  )
}

export default Badge