import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type PaginatorType = {
    totalItemsCount:number
    pageSize:number
    onPageChanged:(p:number)=>void
    currentPage:number
    portionSize:number

}
export let Paginator:React.FC<PaginatorType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        { portionNumber > 1 &&
            <IconButton onClick={() => { setPortionNumber(portionNumber - 1) }}><ArrowBackIosIcon/></IconButton> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <Button className={ cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</Button>
            })}
        { portionCount > portionNumber &&
            <IconButton onClick={() => { setPortionNumber(portionNumber + 1) }}><ArrowForwardIosIcon/></IconButton> }
    </div>
}