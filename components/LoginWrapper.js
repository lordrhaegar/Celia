import { React, useState } from 'react'
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

const LoginWrapper = ({ onPress }) => {
    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginPage, setIsLoginPage] = useState(true);
    // const modalRef = useRef(null);
    // const snapPoints = ["83%"];
    // const openBottomSheetModal = () => {
    //     modalRef.current?.present();
    // }
    // const closeBottomSheetModal = () => {
    //     console.log("Close");
    //     modalRef.current?.close();
    //   }

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                username,
                email,
                password
            });

            console.log(response.data.message);
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    if (isLoginPage) {
        return (
            <SigninForm
                closeModal={onPress}
                setEmail={setEmail}
                setPassword={setPassword}
                authMode={() => setIsLoginPage(false)} />
        );
    }
    return (

        <SignupForm
            closeModal={onPress}
            setfullName={setfullName}
            setEmail={setEmail}
            setPassword={setPassword}
            authMode={() => setIsLoginPage(true)} />
    );
};

export default LoginWrapper