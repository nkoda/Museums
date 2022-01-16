import { Switch } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { PostsPage } from "./pages/PostsPage.js";

export const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="./pages/Post" />
            <Route exact path="./pages/Home" />
        </Switch>
        </BrowserRouter>

    )
}