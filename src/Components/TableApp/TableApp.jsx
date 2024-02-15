// noinspection JSUnresolvedVariable

import React from "react";
import {NavLink} from "react-router-dom";
import Table from "react-bootstrap/Table";
import mukDefaultImg from "../../Utility/Utility";
import styleT from "./TableApp.module.css"


function TableApp(props){
    const{mukData} = props;

    const mukTr = mukData.map((muk) =>{
        return(
            <tr key={muk.numb}>
                <td>
                    <NavLink to={`/Appearances/${muk.numb}`}>
                        <img className={styleT.imgTable} onError={(event) => mukDefaultImg(event)}
                             src={muk.image} alt={muk.name}/>
                    </NavLink>
                </td>
                <td>
                    {muk.series}
                </td>
                <td>
                    {muk.set}
                </td>
                <td>
                    {muk.date}
                </td>
            </tr>
        );
    });

    return(
        <Table className={styleT.appTable}>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Series</th>
                    <th>Set</th>
                    <th>Release</th>
                </tr>
            </thead>
            <tbody>
            {mukTr}
            </tbody>
        </Table>
    );
}

export default TableApp