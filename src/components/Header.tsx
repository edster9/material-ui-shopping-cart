import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

import AppContext from '../context/app-context'

/**
 * Page app bar component
 *
 * @param {*} props
 * @returns Header
 */
const Header = (props: any) => {
  const context = useContext(AppContext)

  // Make the JSS styles
  const classes = makeStyles((theme: Theme) =>
    createStyles({
      appBarWrapper: {
        flexGrow: 1,
      },
      appBar: {},
      pageTitle: {
        flexGrow: 1,
      },
    })
  )()

  return (
    <div className={classes.appBarWrapper}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.pageTitle}>
            {props.title}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="cart"
            component={Link}
            to="cart"
          >
            <Badge badgeContent={context.cart.totalItemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
