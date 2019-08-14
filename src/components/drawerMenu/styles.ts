import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { drawerWidth } from '../../lib/constants'

export default makeStyles(({ transitions, spacing, mixins }: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: spacing(7) + 1
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...mixins.toolbar
    }
  })
)
