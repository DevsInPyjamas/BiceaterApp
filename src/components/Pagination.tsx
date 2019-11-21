import * as React from 'react';

interface PaginationProps {
    currentPage: number;
    taking: number;
    setTaking?: (event: React.FormEvent<HTMLSelectElement>) => void;
    nextPage?: (event: React.MouseEvent<HTMLElement>) => void;
    prevPage?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Pagination : React.FC<PaginationProps> = (
    {
       currentPage,
       taking,
       setTaking,
        nextPage,
       prevPage
   }: PaginationProps) => {

    return (
        <>
            <select onChange={setTaking}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
            </select>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={prevPage} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <button className="page-link" onClick={nextPage} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

