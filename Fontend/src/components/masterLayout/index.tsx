import {memo} from 'react'
import Header from '../header_logout';
//import Footer from '../footer';
import React from "react";

interface Props {
    children: React.ReactNode
}
const MasterLayout: React.FC<Props>= ({children,...props}) =>
    (
        <div>
            <Header />
            {children}
            {/* <Footer/> */}
        </div>
       
    )


export default memo(MasterLayout);