import CircularProgress from '@mui/material/CircularProgress'

const LoadingSpinner = ({ className }) => (
  <div className={className}>
    <CircularProgress />
  </div>
)

export default LoadingSpinner
