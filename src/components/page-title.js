import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({title, description}) => {
  const location = useLocation();

  useEffect(() => {
     document.title = title;
     document.description = description;
  }, [location, title, description])
  

    return null;
}
 
export default PageTitle;