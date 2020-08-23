import classes from "../../common/Paginator/Pagginator.module.css";
import React from "react";

const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil((totalUsersCount / pageSize) / 25);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(p => {
                return <span
                    onClick={() => {
                        onPageChanged(p);
                    }}
                    className={currentPage === p && classes.selectedPage}>{p}</span>
            })}
        </div>
}

export default Paginator;