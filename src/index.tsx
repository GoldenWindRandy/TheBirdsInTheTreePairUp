import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import "./index.less";

const divElement = document.createElement("div");
divElement.id = "root";
document.body.appendChild(divElement);
const rootHtml = document.getElementById("root");

if (rootHtml) {
	const root = createRoot(rootHtml);
	root.render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}
