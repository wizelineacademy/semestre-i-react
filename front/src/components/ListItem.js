import { ReactComponent as Checked } from "../images/checked.svg";
import { ReactComponent as UnChecked } from "../images/unchecked.svg";
import * as React from "react";

const ListItem = ({ children, active, ...props }) => (
  <div className="step-item" {...props} >
    {active
      ? <Checked fill="red" />
      : <UnChecked fill="red" />
    }
    {children}
  </div>
);

export default ListItem;
