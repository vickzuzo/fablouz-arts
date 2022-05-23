import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Toggle } from "../components/user";
import { useMediaQuery } from "react-responsive";
import {
  HomeScreen,
  NotFoundScreen,
  AboutUsScreen,
  GalleryScreen,
  ContactUsScreen,
  NftScreen,
  ShopScreen,
  GalleryDetailsScreen,
} from "../screens";
import { setTheme } from "../state/actions";

export const History = createHistory();

const AppRouter = (props) => {
  const DARK_CLASS = "dark";

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const siteTheme = props.site.theme ? props.site.theme : false;

  const [, setIsDark] = useState(siteTheme);

  const setSiteTheme = (e) => {
    const value = e.target.checked;
    props.setTheme(value);
  };

  useEffect(() => {
    if (props.site.theme === undefined) {
      props.setTheme(systemPrefersDark);
    }
    if (props.site.theme === true) {
      document.documentElement.classList.add(DARK_CLASS);
    } else if (props.site.theme === false) {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [props, props.site.theme, systemPrefersDark]);

  return (
    <Router history={History}>
      <Switch>
        {/** =============== GENERAL SCREEN ROUTES STARTS HERE =============== */}
        <Route path="/" component={HomeScreen} exact={true} />
        <Route path="/biography" component={AboutUsScreen} />
        <Route path="/gallery" component={GalleryScreen} />
        <Route
          path="/gallery-details/:title"
          component={GalleryDetailsScreen}
        />
        <Route path="/contact-me" component={ContactUsScreen} />
        <Route path="/nft" component={NftScreen} />
        <Route path="/shop" component={ShopScreen} />
        {/* <Route path="/biography" component={BiographyScreen} />
        <Route path="/gallery/:id" component={GalleryScreen} /> */}
        <Route component={NotFoundScreen} />
      </Switch>
      <div className="hide_on_mobile put_bottom">
        <Toggle
          checked={siteTheme}
          onChange={setSiteTheme}
          aria_label={siteTheme === true ? "Dark mode" : "Light mode"}
        />
        <p className="current_theme">{siteTheme === true ? "Dark" : "Light"}</p>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});
const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
