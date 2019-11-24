import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { createSequence } from "../utils/NumberUtilities";

interface PaginationProps {
    next: () => void;
    prev: () => void;
    jumpTo: (a: number) => void;
    pageNumber: number;
    pages: number;
    taking: number;
}

export const PaginationController : React.FC<PaginationProps> = ({next, prev, jumpTo, pageNumber, pages, taking}: PaginationProps) => {

    const [sequence, setSequence] = React.useState<number[]>([]);

    React.useEffect(() => {
        if(pages === 0) {
            setSequence([1]);
        } else if(pages < 5) {
            setSequence(createSequence(1, pages + 2));
        } else if(pageNumber + 1 < 4) {
            setSequence(createSequence(1, 6));
        } else if(pageNumber + 3 <= pages) {
            setSequence(createSequence(pageNumber - 1, pageNumber + 4))
        } else {
            setSequence(createSequence(pages - 3, pages + 2))
        }
    }, [pageNumber, taking, pages]);

    const jump = (event: any) => {
        jumpTo(event.target.value - 1);
    };

    const goToLast = (event: any) => {
        jumpTo(pages);
    };

    const goToFirst = (event: any) => {
        jumpTo(0);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination mb-0">
                {
                    pageNumber > 0 &&
                    <li className="page-item">
                        <button className="page-link" onClick={goToFirst}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft}/>
                        </button>
                    </li>
                }
                {
                    pageNumber > 0 &&
                    <li className="page-item">
                        <button className="page-link" onClick={prev}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </button>
                    </li>
                }
                {sequence.map((el) => {
                    return <li key={el}
                               className={(el === pageNumber + 1) ? `page-item active` : `page-item`}>
                        <button className='page-link' onClick={jump} value={el}>{el}</button>
                    </li>
                })}
                {
                    pageNumber !== pages &&
                    <li className="page-item">
                        <button className="page-link" onClick={next}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </button>
                    </li>
                }
                {
                    pageNumber !== pages &&
                    <li className="page-item">
                        <button className="page-link" onClick={goToLast}>
                            <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        </button>
                    </li>
                }
            </ul>
        </nav>
    )
};
