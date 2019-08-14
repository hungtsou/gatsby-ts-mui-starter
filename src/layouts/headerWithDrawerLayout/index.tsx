import React, { useState } from 'react'
import HeaderBar from '../../components/headerBar'
import DrawerMenu from '../../components/drawerMenu'

const HeaderDrawer = ({ children }: any) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = (isOpen: boolean) => setOpen(isOpen)

  return (
    <div>
      <HeaderBar open={open} toggleDrawer={toggleDrawer} />
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />

      {children}
    </div>
  )
}

export default HeaderDrawer
