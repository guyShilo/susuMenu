import { createBrowserHistory } from 'history'
const history = createBrowserHistory();
history.listen(() => {
    console.log("ooh, a navigation!");
  });


export default createBrowserHistory;