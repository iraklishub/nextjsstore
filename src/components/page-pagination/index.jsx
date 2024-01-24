import Pagination from '@mui/material/Pagination'

const PagePagination = ({ page, count, variant, onChange, className }) => {
  return (
    <Pagination
      count={10}
      shape="rounded"
      defaultPage={1}
      page={page}
      onChange={onChange}
      className={className}
      color="primary"
    />
  )
}

export default PagePagination
