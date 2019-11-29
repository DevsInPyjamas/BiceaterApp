import React from 'react';


export const Comment: React.FC<any> = (props) => {

    const {allComments} = props;

    const allCommentsFiltered = allComments.filter((actualComment: any) => {
        return actualComment;
    }).map((actualComment: any) => {
        return (
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-2">

                </div>
                <div className="col-8">
                    <div className="card">
                        <h5 className="card-header">{actualComment.author}</h5>
                        <div className="card-body">
                            <p className="card-text"> {actualComment.text}</p>
                            <div className="row">
                                <footer className="col">
                                    {actualComment.date}
                                </footer>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-2">

                </div>
            </div>
        );
    });

    return (allCommentsFiltered
    );
};