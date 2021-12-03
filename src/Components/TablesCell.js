import { TableCell, styled, TableRow } from '@mui/material'

const StyledTableCellInner = styled(TableCell)({
  textAlign: 'left',
  borderRight: '1px solid rgba(224, 224, 224, 1)',
})

const TablesCell = ({ row }) => {
  return (
    <>
      <TableRow hover role='checkbox' tabIndex={-1}>
        <StyledTableCellInner component='th' scope='row'>
          {row.Name}
        </StyledTableCellInner>
        <StyledTableCellInner>{row.Phone}</StyledTableCellInner>
        <StyledTableCellInner>{row.Email}</StyledTableCellInner>
        <StyledTableCellInner>{row.Date}</StyledTableCellInner>
        <StyledTableCellInner>{row.Country}</StyledTableCellInner>
        <StyledTableCellInner>{row.Company}</StyledTableCellInner>
      </TableRow>
    </>
  )
}

export default TablesCell
