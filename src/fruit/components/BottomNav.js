import React, { useState } from 'react'

import {Link} from "react-router-dom"

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppsIcon from '@material-ui/icons/Apps';

function BottomNav() {
    const pathname = window.location.pathname
    const [value, setValue] = useState(pathname);
    return (
        <div>
            <BottomNavigation id="bottomNav" showLabels value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction value="/" component={Link} to="/" label="Home" icon={<AppsIcon />} />
                <BottomNavigationAction label="Wish List" icon={<FavoriteIcon />} />
                <BottomNavigationAction value="/cart" component={Link} to="/cart" label="My Cart" icon={<ShoppingCartIcon />} />
                <BottomNavigationAction value="/account" component={Link} to="/account" label="Account" icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
