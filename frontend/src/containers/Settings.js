import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";

const Settings = () => {
    return <div>
        Setting Page
        <div>
            <LinkContainer to="/settings/email">
                <LoaderButton block bsSize="large">
                    Change Email
                </LoaderButton>
            </LinkContainer>
            <LinkContainer to="/settings/password">
                <LoaderButton block bsSize="large">
                    Change Password
                </LoaderButton>
            </LinkContainer>
        </div>
    </div>
}

export default Settings;