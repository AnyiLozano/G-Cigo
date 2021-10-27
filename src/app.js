import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from "./routes";
import useStore from './store';

const App = () => {
    const { store, persistor } = useStore();

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={false}>
                    <Routes />
                </PersistGate>
            </Provider>
        </Suspense>
    )
}
export default App;         