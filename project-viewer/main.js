//Setup skills section
function createSkillRow(skillCategory) {
	//Create the row box
	const row = $('<div class="flex row info-row"></div>');
	//Add the header
	row.append($('<div class="standard-header-text-size bold">' + skillCategory + ':</div>'));
	//Add the skills
	row.append($('<div class="standard-text-size">' + getSortedSkillNames(skillCategory) + '</div>'))

	return row;
};

function getSortedSkillNames(skillCategory) {
	//Return a comma seperated list of skills in the given category
	return SKILLS_ARRAY.filter((skill) => skill.category.text == skillCategory)//Filter by category
		.sort((a, b) => a.rank - b.rank)//Sort by rank
		.map((skill) => skill.name)//Grab the name
		.join(", ");//Convert to comma seperated list
};

(function setupSkillsHeader() {
	//Get the skills container
	const skillContainer = $('#info-container');
	//Loop through all the skill categories and add them to the container
	for (const skillCategoryName in SKILL_CATEGORIES) {
		skillContainer.append(createSkillRow(SKILL_CATEGORIES[skillCategoryName].text));
	}
})();

/////////////////////////////

//Setup projects section
function createProject(projectData) {
	//Setup project container
	const projectContainer = $('<div id="project-container" class="flex column"></div>');
	//Add image link
	projectContainer.append(createProjectImgLink(projectData.link, projectData.altText, projectData.img));
	//Add content
	projectContainer.append(createProjectContent(projectData.name, projectData.desc, projectData.dateStart, projectData.dateEnd, projectData.skills));

	return projectContainer;
}

function createProjectImgLink(link, altText, img) {
	//Create link to the project
	const projectLink = $('<a id="screenshot-container" class="border light-blue-border rounded-corners-10 flex" target="_blank"></a>')
		.attr("href", link);
	//Create the image to preview the project
	const projectImg = $('<img id="project-screenshot" class="flex-1"></img>')
		.attr("alt", altText)
		.attr("src", img);
	//Add the image to the link
	projectLink.append(projectImg);

	return projectLink;
}

function createProjectContent(name, desc, dateStart, dateEnd, skills) {
	//Create the content container
	const contentContainer = $('<div id="content" class="flex column"></div>');

	//Create header
	const header = $('<div id="header" class="flex row baseline header"></div>');
	//Add header to container
	contentContainer.append(header);

	//Create title
	const title = $('<div id="title" class="standard-header-text-size bold light-blue-text"></div>')
		.text(name);
	//Add title to header
	header.append(title);

	//Create date
	const date = $('<div id="date-range" class="standard-text-size right-justify flex-1"></div>')
		.text(createDateText(dateStart, dateEnd));
	//Add date to header
	header.append(date);

	//Create description
	const description = $('<div id="description"></div>').text(desc);
	//Add description to container
	contentContainer.append(description);

	//Create skills container
	const skillsContainer = $('<div id="tags" class="flex row wrap"></div>');
	//Create skills
	const skillTags = createSkillTags(skills)
	//Add skills to skills container
	skillTags.forEach((skillTag) => skillsContainer.append(skillTag));
	//Add skills container to content container
	contentContainer.append(skillsContainer);

	return contentContainer;
}

function createSkillTags(skills) {
	//Convert the array of skills to array of skill tags
	return skills.map((skill) => createSkillTag(skill));
}

function createSkillTag(skill) {
	//Create tag container
	const tagContainer = $('<div id="tag-container"></div>')
		.addClass(skill.category.tagCssName);
	//Create tag
	const tag = $('<div id="tag" class="tag"></div>')
		.text(skill.name);
	//Add tag to container
	tagContainer.append(tag);
	
	return tagContainer;
}

function createDateText(dateStart, dateEnd) {
	//Get starting year and month
	yearStart = dateStart.getFullYear();
	monthStart = dateStart.getMonth();

	//Check for end date
	if (dateEnd == null) {
		//Get short start date
		const shortStart = addYearToMonth(getShortMonthDate(dateStart), yearStart);

		//Return "shortStart - Present"
		return buildDateRange(shortStart, "Present");
	}

	//Get ending year and month
	yearEnd = dateEnd.getFullYear();
	monthEnd = dateEnd.getMonth();

	//If both year and month match then return "longStart"
	if (yearStart == yearEnd && monthStart == monthEnd) {
		return addYearToMonth(getLongMonthDate(dateStart), yearStart);
	}

	//Get short start date
	const shortStart = addYearToMonth(getShortMonthDate(dateStart), yearStart);
	//Get short end date
	const shortEnd = addYearToMonth(getShortMonthDate(dateEnd), yearEnd);
	//Return "shortStart - shortEnd"
	return buildDateRange(shortStart, shortEnd);
}

function getLongMonthDate(date) {
	return date.toLocaleString('default', { month: 'long' });
}

function getShortMonthDate(date) {
	return date.toLocaleString('default', { month: 'short' });
}

function addYearToMonth(monthText, year) {
	return monthText + " " + year;
}

function buildDateRange(startText, endText) {
	return startText + " - " + endText;
}

function getTodayPlusOneMonth() {
	//Get today's date
	const newDate = new Date();
	//Add one month
	newDate.setMonth(newDate.getMonth() + 1);

	return newDate;
}

function getFutureDateIfNull(date) {
	//Check if null
	if (date == null) {
		//Return today + 1 month
		return getTodayPlusOneMonth();
	}

	//Not null so just return the original date
	return date;
}

(function setupProjects() {
	//Get the main container that holds all the projects
	const projectsContainer = $('#projects');
	//Sort projects by end date
	PROJECT_DATA.sort((a, b) => {
		//Get dates
		var aDate = a.dateEnd;
		var bDate = b.dateEnd;

		//Return 0 if both are the same
		if (aDate == bDate) {
			return 0;
		}

		//Set the dates to next month if null (present)
		aDate = getFutureDateIfNull(aDate);
		bDate = getFutureDateIfNull(bDate);

		//Compare the dates and return
		return bDate - aDate;
	});
	//Generate all the projects as elements (need to sort before appending them)
	const unsortedProjects = [];
	PROJECT_DATA.forEach((projectData) => unsortedProjects.push(createProject(projectData)));
	
	//Add projects to container
	unsortedProjects.forEach((project) => projectsContainer.append(project));
})();