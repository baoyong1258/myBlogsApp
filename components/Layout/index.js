import Head from 'next/head';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';

const store = createStore(reducer);

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // ...错误处理
    }
};

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})


export default ({ children, title = 'This is the default title' }) => (
    <Provider store={store}>
        <div>
            <Head>
                <title>{ title }</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            { children }
        </div>
    </Provider>
)