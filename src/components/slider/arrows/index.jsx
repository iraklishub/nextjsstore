import { ArrowIcon } from '../..'

export const CustomLeftArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-6 top-[50%] -translate-y-2/4 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-sm shadow-gray-500 z-10"
  >
    <ArrowIcon className="rotate-180" />
  </button>
)

export const CustomRightArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-6 bottom-[50%] translate-y-2/4 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-sm shadow-gray-500 z-10"
  >
    <ArrowIcon />
  </button>
)
