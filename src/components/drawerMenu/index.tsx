import React, { useState } from 'react'
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import {
  Receipt as ReceiptIcon,
  Kitchen as KitchenIcon,
  Terrain as TerrainIcon,
  ShowChart as ShowChartIcon,
  AttachMoney as AttachMoneyIcon,
  ExitToApp as ExitToAppIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@material-ui/icons'
// Locals
import { routes } from '../../lib/constants'
import useStyles from './styles'

interface Props {
  open: boolean
  toggleDrawer: (isOpen: boolean) => void
}

const DrawerMenu = ({ open = false, toggleDrawer }: Props) => {
  const classes = useStyles()
  const theme = useTheme()

  const onToggleDrawer = () => toggleDrawer(false)

  const sideList = (
    <List>
      {[
        {
          text: 'Recibos',
          icon: <ReceiptIcon />,
          href: `${routes.recibos.path}`
        },
        {
          text: 'Silos',
          icon: <KitchenIcon />,
          href: `${routes.silos.path}`
        },
        {
          text: 'Ventas',
          icon: <AttachMoneyIcon />,
          href: `${routes.ventas.path}`
        },
        {
          text: 'Fincas',
          icon: <TerrainIcon />,
          href: `${routes.fincas.path}`
        },
        {
          text: 'Reportes',
          icon: <ShowChartIcon />,
          href: `${routes.reportes.path}`
        },
        {
          text: 'Salir',
          icon: <ExitToAppIcon />,
          href: `${routes.signOff.path}`
        }
      ].map(({ text, href, icon }) => (
        <ListItem button key={text}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onToggleDrawer}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
      </div>
      <Divider />
      <List>{sideList}</List>
    </Drawer>
  )
}

export default DrawerMenu
