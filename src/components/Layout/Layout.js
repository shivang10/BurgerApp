import React from  'react';
import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
    <Auxiliary>
        <div>
            ToolBar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;