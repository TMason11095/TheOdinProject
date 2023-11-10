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
			SKILLS.visualStudio,
			SKILLS.gitHub,
			SKILLS.boxModel
		],
		link: "./index.html",
		img: "./img/9-13-2023-portfolio-website-screenshot-16-9.png",
		altText: "Screenshot of portfolio website."
	}
];