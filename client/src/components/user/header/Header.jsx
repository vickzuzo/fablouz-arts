import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setTheme } from "../../../state/actions";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = (props) => {
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
    <div>
      <div>
        <HeaderDesktop
          setSiteTheme={setSiteTheme}
          siteTheme={siteTheme}
          space={props.space}
        />
        <HeaderMobile
          setSiteTheme={setSiteTheme}
          siteTheme={siteTheme}
          space={props.space}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
