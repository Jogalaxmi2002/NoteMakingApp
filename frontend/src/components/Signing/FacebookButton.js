import { Auth } from "aws-amplify";

const FacebookButton = () => {
    const signIn = async () => {
        alert("Started");
        await Auth.federatedSignIn({
            provider: "Facebook",
        });
    }


    return <button onClick={signIn}>
        FACEBOOK
    </button>
}

export default FacebookButton;