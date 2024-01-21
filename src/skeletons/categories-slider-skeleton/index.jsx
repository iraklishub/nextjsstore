import Skeleton from '@mui/material/Skeleton'

const CategoriesSliderSkeleton = () => (
  <div className="flex justify-around">
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
      <Skeleton className="w-1/2" />
    </div>
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
      <Skeleton className="w-1/2" />
    </div>
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
      <Skeleton className="w-1/2" />
    </div>
    <div className="flex flex-col items-center">
      <Skeleton variant="rectangular" width={230} height={140} />
      <Skeleton className="w-1/2" />
    </div>
  </div>
)

export default CategoriesSliderSkeleton
