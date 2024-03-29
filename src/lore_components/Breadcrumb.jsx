/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Breadcrumb = ({ responsiveMode }) => {
  const location = useLocation();

  let currentLink = "";

  const capitalizeFirstLetterEachWord = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      let formattedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);
      if (formattedCrumb.includes("-")) {
        formattedCrumb = formattedCrumb.replace("-", " ");
        formattedCrumb = capitalizeFirstLetterEachWord(formattedCrumb);
      }

      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={formattedCrumb}>
          <Link to={currentLink}>{formattedCrumb}</Link>
        </div>
      );
    });

  return location.pathname === "/" ? null : (
    <div
      className={`breadcrumbs flex lore-text-grey font-medium ${
        responsiveMode === "xsmall" ? "text-sm" : ""
      }`}
    >
      <Link to="/">Homepage</Link>
      {crumbs}
    </div>
  );
};

export default Breadcrumb;
