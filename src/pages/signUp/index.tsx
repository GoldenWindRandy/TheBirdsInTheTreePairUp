import React from "react";
import {useState}from "react";
import "./index.less";
import { useNavigate, Link, redirect } from "react-router-dom";


export default () => {
	const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: {}
    });
	const { username, email, password, passwordConfirmation, errors } = state;
	const navigate = useNavigate();
	const toLogin = () => {
		navigate("/login");
	};
	
	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<div className="w-[56rem] h-[40rem] border flex">
				<div className="login flex-1 text-white flex justify-center items-center">
					<div className="pl-8">
						<div className="font-bold text-4xl">
							Enjoy with iClimate
						</div>
						<div className="max-w-xs">
							Our goal is to provide you with a comfortable,
							energy-efficient, and intelligent indoor
							environment.
						</div>
					</div>
				</div>
				<div className="flex-1">
					<div className="w-full h-3/4 relative">
						<div className="relative pl-16 text-2xl mb-32 font-bold">
							Sign In
						</div>
						<div className="w-full flex flex-col justify-center items-center mb-4">
							<div className="w-3/4">
								<div className="text-[#666] font-thin text-xs mb-1">
									用户名
								</div>
								<input
									className='form-control'
									type="text"
									name="username"
								/>
								<div className="text-[#666] font-thin text-xs mb-1">
									邮箱
								</div>
								<input
									className='form-control'
									type="text"
									name="email"
								/>
								<div className="text-[#666] font-thin text-xs mb-1">
									密码
								</div>
								<input
									className='form-control'
									type="password"
									name="password"
								/>
								<div className="text-[#666] font-thin text-xs mb-1">
									再次输入密码
								</div>
								<input
									className='form-control'
									type="password"
									name="passwordConfirmation"
								/>
							</div>
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<div className="w-3/4">
								<div className="text-left">
									<div
										className="bg-sky-500 w-32 h-10 leading-10 text-center rounded-full hover:cursor-pointer select-none"
										onClick={toLogin}
									>
										注册成功
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-end mt-[-2rem]">
						<div className="logo w-16 h-20"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
