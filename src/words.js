module.exports = [
	{ no: "[Gg]ithub", yes: "GitHub" },
	{ no: "[Jj]avascript", yes: "JavaScript" },
	{ no: "[Gg]atsby\\.\?[Jj][Ss]", yes: "Gatsby" },
	{ no: "(?<!-)gatsby(?!-)", yes: "Gatsby" },
	{ no: "[Rr]eact\\.\?[Jj][Ss]", yes: "React" },
	{ no: "node\\.\?[Jj][Ss]", yes: "Node.js" },
	{ no: "Node[Jj][Ss]", yes: "Node.js" },
	{ no: "[Nn]pm\\.\?[Jj][Ss]", yes: "npm" },
	{ no: "Npm", yes: "npm" },
]
