import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './CustomersPage.scss';

export default function CustomersPage() {
    const bem = useBem('CustomersPage');

    return (
        <div className={bem.block()}>
            Hello!
        </div>
    );
}
