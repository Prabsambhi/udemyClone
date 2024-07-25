import React from 'react';
import { Rate } from 'antd';

const Rating = ({ rating }) => {
    
    return (
        <Rate
            value={rating}
            className="text-yellow-600 text-xs sm:text-sm"
            disabled
            allowHalf
            
        />
    );
};

export default Rating;
