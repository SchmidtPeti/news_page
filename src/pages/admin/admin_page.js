import React from 'react';
import "./admin_page.css";

const Admin_page = () =>{
    return(
        <div className={'grid-layout'}>
            <div className={'left-header'}>
                Username
            </div>
            <div className={'right-header'}>
                logout
            </div>
            <div className={'title'}>
                <input type="text"/>
            </div>
            <div className={'body'}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={'save-btn'}>
                <button>Mentés</button>
            </div>
        </div>
    )
}
export default Admin_page;