import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useTranslation from '@/hooks/useTranslation';

const ActionMenu = ({ onMenuItemClick }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = action => {
    onMenuItemClick(action);
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="item-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="item-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {[
          {
            label: t('edit'),
            icon: <EditIcon fontSize="small" />,
            action: 'edit',
          },
          {
            label: t('delete'),
            icon: <DeleteIcon fontSize="small" />,
            action: 'delete',
          },
        ].map(({ label, icon, action }) => (
          <MenuItem
            key={action}
            onClick={() => handleItemClick(action)}
            sx={{ pt: 1, pb: 1 }}
          >
            {icon}
            <Typography variant="body2" sx={{ ml: 1 }}>
              {label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ActionMenu;
