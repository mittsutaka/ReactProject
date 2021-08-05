import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { FloatingButton } from '../../atoms/buttons/FloatingButton';
import { TextButton } from '../../atoms/buttons/TextButton';
import { Checkbox } from '../../atoms/checkboxes/Checkbox';
import { SearchField } from '../../molcules/input/SearchField';
import { Table } from '../../molcules/flow/Table';
import { Tab } from '../../atoms/tabs/Tab';
import { Header } from '../../molcules/shared/Header';
import { SideMenu } from '../../molcules/shared/SideMenu';

const useStyles = makeStyles(() => ({
    actionBlock: {
        paddingTop: '32px',
        paddingBottom: '32px'
    },
    tabGroup: {
        padding: '8px',
        paddingTop: '32px',
        height: '32px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
    sideMenu: {
        width: '120px'
    },
    content: {
        width: '840px'
    },
    right: {
        padding: '32px'
    }
}))

const Index = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <div className={classes.body}>
                <SideMenu className={classes.sideMenu} />
                <div className={classes.content}>
                    <div className={classes.tabGroup}>
                        <Tab text="フロートップ" isSelected />
                        <Tab text="下書き" />
                        <Tab text="お気に入り" />
                    </div>
                    <div className={classes.actionBlock}>
                        <TextButton text='新しくフローを作る' variant='primary' />
                    </div>
                    <Table />

                    <br />
                </div>
                <div className={classes.right}>
                    <SearchField />
                    <Checkbox text='チェックボックス' />
                </div>
            </div>
            <FloatingButton iconColor='#fff' icon='chat_bubble' />
        </div>
    )
}

export default Index;