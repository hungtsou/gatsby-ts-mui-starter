import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { drawerWidth } from '../../lib/constants'

export default makeStyles(({ transitions, zIndex }: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    appBar: {
      zIndex: zIndex.drawer + 1,
      transition: transitions.create(['width', 'margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitions.create(['width', 'margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 4,
      marginRight: 36
    },
    hide: {
      display: 'none'
    }
  })
)
