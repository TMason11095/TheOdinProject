function createDateObj(yearMonthText) {
	//Add 00 time at the end to prevent timezones from changing the day
	return new Date(yearMonthText + "-01T00:00:00")
}

const PROJECT_DATA = [
	{
		name: "Flexbox Landing Page Practice",
		dateStart: createDateObj("2023-09"),
		dateEnd: createDateObj("2023-09"),
		desc: "Landing page website created using Flexbox in HTML/CSS to practice coding different types of layouts and designs.",
		skills: [
			SKILLS.css,
			SKILLS.html,
			SKILLS.visualStudio,
			SKILLS.gitHub,
			SKILLS.boxModel
		],
		link: "../flexbox-website/index.html",
		img: "./img/9-10-2023-flexbox-website-screenshot-16-9.png",
		altText: "Screenshot of Flexbox landing page website."
	},
	{
		name: "Portfolio Website",
		dateStart: createDateObj("2023-09"),
		dateEnd: null,
		desc: "This portfolio website. Built using JS/jQuery/CSS/HTML to display web projects that I’ve created.",
		skills: [
			SKILLS.js,
			SKILLS.css,
			SKILLS.html,
			SKILLS.jquery,
			SKILLS.dom,
			SKILLS.visualStudio,
			SKILLS.gitHub,
			SKILLS.boxModel
		],
		link: "./index.html",
		img: "./img/11-10-2023-portfolio-website-screenshot-16-9.png",
		altText: "Screenshot of portfolio website."
	},
	{
		name: "Etch-A-Sketch",
		dateStart: createDateObj("2023-10"),
		dateEnd: createDateObj("2023-11"),
		desc: "Website built using JS/jQuery/CSS/HTML that lets you draw on a user defined canvas.",
		skills: [
			SKILLS.js,
			SKILLS.css,
			SKILLS.html,
			SKILLS.jquery,
			SKILLS.dom,
			SKILLS.visualStudio,
			SKILLS.gitHub,
			SKILLS.boxModel
		],
		link: "../etch-a-sketch/index.html",
		img: "./img/etch-a-scetch-screenshot-16-9-small.png",
		altText: "Screenshot of Etch-A-Sketch website."
	},
	{
		name: "Rock Paper Scissors",
		dateStart: createDateObj("2023-09"),
		dateEnd: createDateObj("2023-10"),
		desc: "Website created using JS/CSS/HTML to play rock paper scissors against a computer.",
		skills: [
			SKILLS.js,
			SKILLS.css,
			SKILLS.html,
			SKILLS.dom,
			SKILLS.visualStudio,
			SKILLS.gitHub,
			SKILLS.boxModel
		],
		link: "../js-fundamentals/rock-paper-scissors/index.html",
		img: "./img/rock-paper-scissors-screenshot-16-9-small.png",
		altText: "Screenshot of Rock Paper Scissors website."
	}
];