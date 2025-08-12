import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './UsersPage.scss';

export default function UsersPage() {
    const bem = useBem('UsersPage');

    return (
        <div className={bem.block()}>
            Hello!
        </div>
    );
}
