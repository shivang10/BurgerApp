import React, {Component} from  'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component { 

    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
        return {
            showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render(){
        return (
            <Auxiliary>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
};

export default Layout;