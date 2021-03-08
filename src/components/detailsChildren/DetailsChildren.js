import React, { useContext } from 'react';
import { SetCategory } from '../../App';

const DetailsChildren = () => {
    const category = useContext(SetCategory);
    return (
        <div>
            <p>This grandchild components: {category}</p>
        </div>
    );
};

export default DetailsChildren;