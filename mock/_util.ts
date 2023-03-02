import { ViteMockOptions } from 'vite-plugin-mock';
import { MockMethod, MockResult } from './_interface';

export function createMock(mocks: MockMethod[]) {
    const filterMock = mocks.filter(mock => mock.enable);

    filterMock.forEach(mock => {
        const oldResponse = mock.response;
        mock.response = (opt?: ViteMockOptions) => {
            const responseData = oldResponse?.(opt) as MockResult;
            if(responseData && !('isMock' in responseData)) {
                return Object.assign({}, { isMock: true }, responseData)
            } else {
                return responseData;
            }
        }
    });

    return filterMock;
}

export function resultSuccess<T>(data: T, msg = 'ok') {
    return {
        code: 0,
        data,
        msg
    }
}

export function reeesultError<T>(code = -1, { msg, data }: { msg: string; data: T }) {
    return {
        code: -1,
        msg,
        data
    }
}