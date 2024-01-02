import React from "react";
import "./index.less";
import { useNavigate, Link, redirect } from "react-router-dom";

export default () => {
	const navigate = useNavigate();
	const toTempControl = () => {
		console.log("control");
		navigate("/func");
	};
	const toSignUp = () => {
		navigate("/signUp");
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
					<div className="mt-12 mb-12 text-xs pl-60">
						Don’t have an acount?{" "}
						<span className="underline hover:cursor-pointer" onClick={toSignUp}>
							Sign up
						</span>
					</div>
					<div className="w-full h-3/4 relative">
						<div className="relative pl-16 text-2xl mb-32 font-bold">
							Sign In
						</div>
						<div className="w-full flex flex-col justify-center items-center mb-4">
							<div className="w-3/4">
								<div className="text-[#666] font-thin text-xs mb-1">
									User name or email address
								</div>
								<input />
							</div>
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<div className="w-3/4">
								<div className="text-[#666] font-thin text-xs mb-1">
									Your password
								</div>
								<input type="password" />
								<div className="text-xs mb-1 text-right underline hover:cursor-pointer mt-2">
									Forget your password
								</div>
								<div className="text-left">
									<div
										className="bg-sky-500 w-32 h-10 leading-10 text-center rounded-full hover:cursor-pointer select-none"
										onClick={toTempControl}
									>
										Sign In
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
