## Routes Guide & Code Snippets

### create new `Create` directory in routes

1. create new directory `routes/Create`
2. create `index.jsx`
3. create and export class

```
import React from 'react'

class Create extends React.Component {
  render = () => {
  }
}

export default Create
```

### import react-router in App.js

```
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
```

### import the components 

### create Router, Switch, and Route

```
<Router>
  <Header/>
  <div className = 'container'>
  <Switch>
    <Route exact path = { HOME_PATH } component = { Home } />
    <Route exact path = { CREATE_PATH } component = { Create } />
  </Switch>  
  </div>
</Router>
```
