import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './SubscribesPage.scss';

export default function SubscribesPage() {
    const bem = useBem('SubscribesPage');

    return (
        <div className={bem.block()}>
            Hello!
        </div>
    );
}
