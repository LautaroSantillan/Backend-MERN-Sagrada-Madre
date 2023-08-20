import { useAuth } from "../context/authContext";

function RemindersPage(){
    const {user} = useAuth();
    console.log(user);

    return(
        <div>
            RemindersPage
        </div>
    )
}

export default RemindersPage;