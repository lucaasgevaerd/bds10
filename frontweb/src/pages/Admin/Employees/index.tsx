import { Redirect, Route, Switch } from "react-router-dom";
import { hasAnyRoles } from "util/auth";
import Form from "./Form";
import List from "./List";

const Employee = () => {

    return (
        <Switch>
            <Route path="/admin/employees" exact>
                <List />
            </Route>
            {hasAnyRoles(["ROLE_ADMIN"]) && (
                <Route path="/admin/employees/:employeeId">
                    <Form />
                </Route>
            )}
            <Route path="/admin/employees/*" >
                <Redirect to="/admin/employees" />
            </Route>
        </Switch>
    )
}

export default Employee;
