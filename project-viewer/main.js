function createSkillRow(skillCategory) {
	//Create the row box
	const row = $('<div class="flex row info-row"></div>');
	//Add the header
	row.append($('<div class="standard-header-text-size bold">' + skillCategory + ':</div>'));
	//Add the skills
	row.append($('<div class="standard-text-size">' + getSortedSkillNames(skillCategory) + '</div>'))

	return row;
}

function getSortedSkillNames(skillCategory) {
	//Return a comma seperated list of skills in the given category
	return skills.filter((skill) => skill.category == skillCategory)//Filter by category
		.sort((a, b) => a.rank - b.rank)//Sort by rank
		.map((skill) => skill.name)//Grab the name
		.join(", ");//Convert to comma seperated list
}

(function setupSkillsHeader() {
	//Get the skills container
	const skillContainer = $('#info-container');
	//Loop through all the skill categories and add them to the container
	for (const skillCategory in skillCategories) {
		skillContainer.append(createSkillRow(skillCategories[skillCategory]));
	}
})();