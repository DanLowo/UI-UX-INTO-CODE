import React, { useState } from 'react'

import {Link} from "react-router-dom"

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function BottomNav() {
    const pathname = window.location.pathname
    const [value, setValue] = useState(pathname);
    return (
        <div>
            <BottomNavigation id="bottomNav" showLabels value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction value="/" component={Link} to="/" label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction value="/cards" label="Cards" component={Link} to="/cards" icon={<PaymentOutlinedIcon />} />
                <BottomNavigationAction value="/subscriptions" component={Link} to="/subscriptions" label="Subscriptions" icon={<SubscriptionsOutlinedIcon />} />
                <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<PersonOutlineOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
