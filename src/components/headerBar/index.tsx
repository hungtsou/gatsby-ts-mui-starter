import React, { useState } from 'react'
import clsx from 'clsx'
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core'
import useStyles from './styles'

interface Props {
  open: boolean
  toggleDrawer: (isOpen: boolean) => void
}

const HeaderBar = ({ open = false, toggleDrawer }: Props) => {
  const [auth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()

  const handleProfileMenu = (event: any) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const onToggleDrawer = () => toggleDrawer(true)

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onToggleDrawer}
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Coope Naranjo
        </Typography>
        {auth && (
          <div>
            <IconButton aria-owns={open ? 'menu-appbar' : undefined} aria-haspopup="true" onClick={handleProfileMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar
