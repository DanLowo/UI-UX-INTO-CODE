import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

import Image from "../../assets/avatar1.jpeg"

const customStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        marginBottom: 15,
        marginTop: 15
    },
    avatar: {
        display: 'inline-block',
        width: 50,
        height: 50,
        marginTop: 'auto',
        marginRight: 7
    },
    message: {
        padding: 15,
        backgroundColor: '#ebebeb',
        maxWidth: '55vw',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 35
    }
}))

function SecondUser() {
    const styles = customStyles()
    return (
        <div className={styles.root}>
            <Avatar className={styles.avatar} src={Image}  />
            <div className={styles.message}>
                Hello Daniel, How are you doing to day. i saw your post it's very nice.
            </div>
        </div>
    )
}

export default SecondUser