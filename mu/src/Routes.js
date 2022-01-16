import Post from './Post';
import Home from './Home';
function Routes() {
    return(        
    <Switch>
        Hellp
      <Route path="/" component={Post} />    
      <Route path="/" component={Home} />
    </Switch>
    )
}

export default Routes;