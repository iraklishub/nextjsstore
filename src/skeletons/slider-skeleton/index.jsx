import Skeleton from '@mui/material/Skeleton'

const SliderSkeleton = () => (
  <div className="flex justify-around">
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
    </div>
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
    </div>
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
    </div>
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
    </div>
  </div>
)

export default SliderSkeleton
