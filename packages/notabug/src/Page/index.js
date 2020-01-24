import { withRouter } from "react-router-dom";
import { Page as PageBase } from "./Page";
export { PageTemplate } from "./Template";
export { PageFooter } from "./Footer";
export const Page = withRouter(PageBase);
