import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Form } from "react-router-dom";
import { Outlet, useNavigate, useRoutes } from "react-router-dom";
import router from "./router";
import { flushSync } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

const App = () => {

	return (
		<>
			<Outlet></Outlet>
		</>
	);
};

export default App;
