import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './DrugsPage.scss';

export default function DrugsPage() {
    const bem = useBem('DrugsPage');

    return (
        <div className={bem.block()}>
            Hello!
        </div>
    );
}
