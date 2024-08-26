import React from 'react';
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
import ActionMenu from '@/components/molecules/MapTable/ActionMenu';
import AddPolygon from '@/components/molecules/MapTable/AddPolygon';

const StyledTableCell = styled(TableCell)(({ theme, width, align }) => ({
  ...theme.typography.bodySSemibold,
  textAlign: align || 'left',
  width: width || 'auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  borderBottom: '1px solid #D5D6E3',
}));

const MapTable = ({
  data,
  isPolygonMode,
  isAdding,
  onSaveNewItem,
  onCancelNewItem,
}) => {
  const { t } = useTranslation();

  return (
    <TableContainer>
      <Table>
        <TableHead sx={{ bgcolor: 'background.paper' }}>
          <TableRow>
            <StyledTableCell width="30%">{t('name')}</StyledTableCell>
            <StyledTableCell width="50%">
              {t(isPolygonMode ? 'coordinates' : 'coordinate')}
            </StyledTableCell>
            <StyledTableCell width="20%" align="right">
              {t('action')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow
              key={item.id}
              sx={{
                borderBottom: '1px solid #D5D6E3',
                '&:hover': {
                  backgroundColor: 'background.lightPurple',
                },
              }}
            >
              <StyledTableCell width="30%">{item.name}</StyledTableCell>
              <StyledTableCell width="50%">
                {isPolygonMode
                  ? item.coordinates
                      .map(coord => `(${coord.lat}, ${coord.lng})`)
                      .join(' ')
                  : `(${item.coordinates?.lat}, ${item.coordinates?.lng})`}
              </StyledTableCell>
              <StyledTableCell width="20%" align="right">
                <ActionMenu onMenuItemClick={() => {}} />
              </StyledTableCell>
            </TableRow>
          ))}
          {isAdding && (
            <TableRow>
              <TableCell colSpan={3} sx={{ p: 0 }}>
                <AddPolygon
                  isPolygonMode={isPolygonMode}
                  onSave={onSaveNewItem}
                  onCancel={onCancelNewItem}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MapTable;
