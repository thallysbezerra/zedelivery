import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'

const Routing = () => {
    return (
        <Switch>
            <Route path="/" component = {Home} exact />
            <Route path="/products" component = {Products} />
        </Switch>
    )
}

export default Routing