import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import useTranslation from '@/hooks/useTranslation';
import SortIcon from '@mui/icons-material/Sort';
import ActionMenu from '@/components/molecules/MapTable/ActionMenu';

const StyledTableCell = styled(TableCell)(({ theme, width, align }) => ({
  ...theme.typography.bodySSemibold,
  textAlign: align || 'left',
  width: width || 'auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const MapTable = ({ data, isPolygonMode }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = action => {
    handleClose();
  };

  return (
    <TableContainer>
      <Table>
        <TableHead sx={{ bgcolor: 'background.paper' }}>
          <TableRow>
            <StyledTableCell width="30%">
              {t('name')}
              <SortIcon
                fontSize="small"
                sx={{ verticalAlign: 'middle', marginLeft: 1 }}
              />
            </StyledTableCell>
            <StyledTableCell width="50%">
              {t('coordinates')}
              <SortIcon
                fontSize="small"
                sx={{ verticalAlign: 'middle', marginLeft: 1 }}
              />
            </StyledTableCell>
            <StyledTableCell width="20%" align="right">
              {t('action')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <StyledTableCell width="30%">{item.name}</StyledTableCell>
              <StyledTableCell width="50%">
                {isPolygonMode
                  ? item.coordinates
                      .map(coord => `(${coord.lat}, ${coord.lng})`)
                      .join(' ')
                  : `(${item.coordinate.lat}, ${item.coordinate.lng})`}
              </StyledTableCell>
              <StyledTableCell width="20%" align="right">
                <ActionMenu onMenuItemClick={handleMenuItemClick} />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MapTable;
