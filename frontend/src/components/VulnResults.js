const VulnResults = [
	{
		mod_name: "Django 2.1",
		vul_name: "XXE",
		desc: "This is really serious vuln",
		url: "www.exploitdb.com/exploits/fsdf.html",
	},
	{
		mod_name: "Django 1.1",
		vul_name: "Unauthorised Admin",
		desc: "This is the end",
		url: "www.idk.com",
	},
];

const Repo = {
	Repository_Name: "p1xxxel/vulnlauncher",
	Author: "p1xxxel",
	Description: "Launch vulnhub machines through a web interface",
	Stars: 1,
	Watchers: 1,
};

const gen = {
	percent: 50
}

export default VulnResults;
export { Repo,gen };