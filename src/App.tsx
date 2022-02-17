import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRouter from "components/AppRouter";
import store from 'core/redux/store.js'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
