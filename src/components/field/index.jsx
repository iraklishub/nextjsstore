import { clsx } from 'clsx'

const Field = ({ id, type, value, onChange, required, placeholder, className }) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
      className={clsx('rounded-sm py-2 px-4', className)}
    />
  )
}

export default Field
