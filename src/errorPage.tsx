import React, { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

export default () => {

	const navigate = useNavigate();

	const error:any = useRouteError();
	console.error(error);

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, [])

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
