import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../App";
import Index from "../pages/begin";
import ErrorPage from "../errorPage";
import LogIn from "../pages/logIn";
import SignUp from "../pages/signUp";
import TempControl from "../pages/tempControl";
import Devices from "../pages/devices";
import Func from "../pages/func";
import Warnning from "../pages/warnning";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				id: "主页",
				path: "/",
				element: <Index />,
			},
			{
				path: "/logIn",
				id: "logIn",
				element: <LogIn />,
			},
			{
				path: "/signUp",
				id: "signUp",
				element: <SignUp />,
			},
			{
				path: "/func",
				element: <Func />,
				id: "func",
				children: [
					{
						index: true,
						path: "tempControl",
						id: "tempControl",
						element: <TempControl />,
					},
					{
						path: "warnning",
						id: "warnning",
						element: <Warnning />,
					},
					{
						path: "devices",
						id: "devices",
						element: <Devices />,
					},
				],
			},
		],
	},
]);

export default router;
