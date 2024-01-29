import React from 'react';
import { Paginator } from '../common/Paginator';
import {User} from "./User";
import Card from "@mui/material/Card";

export const Users = (props: any) => {

    return (<>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged} portionSize={10}  />


        <Card> <User {...props}/></Card>
        </>

    )
};

export default Users;