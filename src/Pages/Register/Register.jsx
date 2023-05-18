import React, { useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { creatUserEmailPassword, UpdateUserNamePicture } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const info = {
            displayName: name,
            photoURL: image
        }

        /* Create User Method Use Context Api */
        creatUserEmailPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success(' Account Created Successfully🤟 !')

                /* User Update  */
                UpdateUserNamePicture(info)
                    .then(() => {
                        // Profile updated!
                        toast.success('Auto Profile Update Successfully🤟 !')
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });


            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });

        /* Form Reset */
        form.reset()





    }




    return (
        <div>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <div className='text-center space-y-2'>
                    <h1 className="text-4xl font-medium">Register</h1>
                    <p className="text-slate-500">Hi, Welcome A New User 👋</p>
                </div>
                <form onSubmit={handleRegister} className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="name">
                            <p className="font-medium text-slate-700 pb-2">Your Name</p>
                            <input id="name" name="name" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>
                        <label htmlFor="image">
                            <p className="font-medium text-slate-700 pb-2">Your Profile Image</p>
                            <input id="image" name="image" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Email address</p>
                            <input id="email" name="email" required type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input id="password" required name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                        </label>
                        <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">

                            <span>Submit</span>
                        </button>
                        <p className="text-center">Already Have an Account ? <Link to="/login" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" >

                        </svg></span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;