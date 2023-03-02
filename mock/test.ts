import { createMock, resultSuccess } from './_util';

export default createMock([
    {
        enable: true,
        url: '/api/login',
        method: 'post',
        response: () => resultSuccess({
            name: 'jjy'
        })
    }
])