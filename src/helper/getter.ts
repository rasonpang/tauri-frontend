import { useParams } from '@solidjs/router';
import { createMemo } from 'solid-js';

export const getParam = (key: string) => {
    const param = createMemo(() => useParams()[key]);

    return param;
};