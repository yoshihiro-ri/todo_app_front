import SignUp from '../components/form/SignUp';
import LogIn from '../components/form/LogIn';
const handleCheckLogin = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/check_login', {
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
function Form() {
    return (
        <div>
            <h2>Form</h2>
            {/* <SignUp /> */}
            <br></br>
            <LogIn />
            <button onClick={handleCheckLogin}>Check Login</button>
        </div>
    );
}

export default Form;
