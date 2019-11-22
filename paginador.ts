import * as React from 'react';
import { PaginationController } from './PaginationController';

interface PaginationProps {
    paginationCount: number;
    pageNumber: number;
    taking: number; 
    handleSetTaking: (event: any) => void;
    nextPage: () => void;
    prevPage: () => void;
    jumpTo: (event: any) => void;
    className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({className, paginationCount, pageNumber, taking, nextPage, prevPage, handleSetTaking, jumpTo}: PaginationProps) => {
    return (
        <div className={`d-flex justify-content-between align-items-center ${className}`}>
            <div>Page: {pageNumber + 1} of {Math.floor(paginationCount / taking) + 1}</div>
            <div className='row align-items-center'>
                <select className='col form-control input-login bg-dark' style={{height: "75%"}} onChange={handleSetTaking} defaultValue={taking.toString()}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <div className='col'><PaginationController next={nextPage} jumpTo={jumpTo} prev={prevPage} pageNumber={pageNumber} taking={taking} pages={Math.floor(paginationCount / taking)}/></div>
            </div>
        </div>
    )
}
