import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { authenticateSignup } from '../../service/api'
import { DataContext } from '../../contex/DataProvider'
import { authenticateLogin } from '../../service/api'

const Components = styled(Box)`
height:70vh;
width:90vh;
`
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
height:83%;
width:28%;
padding: 45px 35px;
& > p , & >h5 {
  color: #FFFFFF; 
  font-weight: 600;
}
`

const LoginDetail = styled(Box)`
display:flex;
flex-direction: column;
padding:25px 35px;
flex:1;
& > div , & > button, &>p{
    margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height:48px;
border-radius:2px;
`
const RequestOtpButton = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align: center;
color:#2874f0;
font-weight: 600;
cursor:pointer;
`

const Error = styled(Typography)`
font-size:10px;
color: #ff6161;
line-height:0;
margin-top:10px;
font-weight:600;

`

const accountIntitialValue = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInputValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',

}

const loginInputValue = {
    username: '',
    password: ''
}

const Login = ({ open, setLogin }) => {
    const [account, setAccount] = useState(accountIntitialValue.login)
    const [signup, setSignup] = useState(signupInputValue);
    const [login, setLog] = useState(loginInputValue);
    const [error, setError] = useState(false);

    const { setContexted } = useContext(DataContext);


    const handleClode = () => {
        setLogin(false);
        setAccount(accountIntitialValue.login)
        setError(false);
    }

    const Signup = () => {
        setAccount(accountIntitialValue.signup)
    }

    const onInputChange = (e) => {

        setSignup({ ...signup, [e.target.name]: e.target.value })
        console.log(signup);

    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClode();
        setContexted(signup.firstname);
    }

    const onValueChange = (e) => {
        setLog({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClode();
            setContexted(response.data.data.firstname);

        } else {
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClode}
            PaperProps={{ sx: { maxWidth: 'unset' } }}
        >
            <Components>
                <Box style={{ display: "flex", height: "100%" }}>

                    <Image>
                        <Typography variant='h5' >{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }} >{account.subHeading}</Typography>
                    </Image>
                    {account.view === "login" ?
                        <LoginDetail>
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                            {error && <Error>Please Enter valid username or password </Error>}
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />

                            <Text >
                                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                            </Text>

                            <LoginButton onClick={() => loginUser()} >LOGIN</LoginButton>

                            <Typography style={{ textAlign: "center" }}>OR</Typography>

                            <RequestOtpButton>Request OTP</RequestOtpButton>

                            <CreateAccount onClick={() => Signup()} >New to Flipkart? Create an account</CreateAccount>

                        </LoginDetail>
                        :
                        <LoginDetail>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last Name" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone" />



                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>


                        </LoginDetail>
                    }


                </Box>

            </Components>
        </Dialog>
    )
}

export default Login