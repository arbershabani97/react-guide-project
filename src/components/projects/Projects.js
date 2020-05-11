import "./styles/Projects.scss";

import React, {useCallback, useMemo, useState} from "react";
import {TabContent, TabPane} from "reactstrap";

import CreateProject from "./resources/CreateProject";
import DeleteProject from "./resources/DeleteProject";
import EditProject from "./resources/EditProject";
import ListProjects from "./resources/ListProjects";
import ShowProject from "./resources/ShowProject";

const Projects = () => {
	const [activeTab, setActiveTab] = useState("home");

	const handleToggle = useCallback((e) => setActiveTab(e.currentTarget.getAttribute("tab") || "home"), []);

	const isHomeActive = useMemo(() => (activeTab === "home" ? "active" : ""), [activeTab]);
	const isCreateActive = useMemo(() => (activeTab === "create" ? "active" : ""), [activeTab]);

	return (
		<div className="Projects">
			<div className="header">
				<button className={isHomeActive} onClick={handleToggle} tab="home" type="button">
					Home
				</button>
				<button className={isCreateActive} onClick={handleToggle} tab="create" type="button">
					Create
				</button>
			</div>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="home">
					<h3>Home Tab</h3>
					<ListProjects onToggle={handleToggle} />
				</TabPane>
				<TabPane tabId="show">
					<h3>Show Tab</h3>
					<ShowProject />
				</TabPane>
				<TabPane tabId="create">
					<h3>Create Tab</h3>
					<CreateProject />
				</TabPane>
				<TabPane tabId="edit">
					<h3>Edit Tab</h3>
					<EditProject />
				</TabPane>
				<TabPane tabId="delete">
					<h3>Delete Tab</h3>
					<DeleteProject />
				</TabPane>
			</TabContent>
		</div>
	);
};

export default React.memo(Projects);
