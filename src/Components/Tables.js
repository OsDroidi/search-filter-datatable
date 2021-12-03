import { useState, useContext } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from '@mui/material'
import JSONDATA from '../MOCK_DATA.json'
import { searchContext } from '../Context/Context'
import HeadTable from './HeadTable'

const StyledTableCell = styled(TableCell)({
  backgroundColor: '#F5F5F5',
  color: '#000',
  textAlign: 'left',
  borderRight: '1px solid rgba(224, 224, 224, 1);',
})

const StyledTableCellInner = styled(TableCell)({
  textAlign: 'left',
  borderRight: '1px solid rgba(224, 224, 224, 1)',
})

const StickyHeadTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const { searchTerm } = useContext(searchContext)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <HeadTable />
        <Table stickyHeader aria-label='sticky table'>
          <TableHead style={{ backgroundColor: '#F7F8F9' }}>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Company</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {JSONDATA.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (
                Object.values(val)
                  .join('')
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
                // val.Name.toLowerCase().includes(searchTerm.toLowerCase())
                // val.Email.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val
              }
              return false
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key) => (
                <TableRow key={key} hover role='checkbox' tabIndex={-1}>
                  <StyledTableCellInner component='th' scope='row'>
                    {row.Name}
                  </StyledTableCellInner>
                  <StyledTableCellInner>{row.Phone}</StyledTableCellInner>
                  <StyledTableCellInner>{row.Email}</StyledTableCellInner>
                  <StyledTableCellInner>{row.Date}</StyledTableCellInner>
                  <StyledTableCellInner>{row.Country}</StyledTableCellInner>
                  <StyledTableCellInner>{row.Company}</StyledTableCellInner>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={JSONDATA.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default StickyHeadTable
