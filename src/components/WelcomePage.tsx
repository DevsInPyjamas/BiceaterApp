import React from 'react';

export const WelcomePage : React.FC = () => {
    const [state, setState] = React.useState<string>('Hello');
    return (
        <div>
        Hello, world, { state }
        </div>
    );
};
