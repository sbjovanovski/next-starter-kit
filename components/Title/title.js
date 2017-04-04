import React from 'react';
import stylesheet from './title.scss';

export default ({ title }) => (
    <div className="title">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {title}
    </div>
)