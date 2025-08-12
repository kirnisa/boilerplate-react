import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './PurchasesPage.scss';

export default function PurchasesPage() {
    const bem = useBem('PurchasesPage');

    return (
        <div className={bem.block()}>
            Hello!
        </div>
    );
}
