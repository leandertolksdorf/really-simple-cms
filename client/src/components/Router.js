import React from "react"
import { Route } from "wouter"
import Dashboard from "../pages/Dashboard"
import Settings from "../pages/Settings"
import Texts from "../pages/Texts"
import Users from "../pages/Users"
import Assets from "../pages/Assets"
import AssetEdit from "../pages/AssetEdit"
import TextEdit from "../pages/TextEdit"

function Router() {
  return (
    <>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/texts">
        <Texts />
      </Route>
      <Route path="/texts/edit">{(params) => <TextEdit create />}</Route>
      <Route path="/texts/edit/:slug">
        {(params) => <TextEdit slug={params.slug} />}
      </Route>
      <Route path="/assets">
        <Assets />
      </Route>

      <Route path="/assets/edit/:slug">
        {(params) => <AssetEdit slug={params.slug} />}
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </>
  )
}

export default Router
