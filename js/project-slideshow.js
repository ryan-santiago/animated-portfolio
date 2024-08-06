let project = document.getElementsByClassName('project')
let slideIndex = 1



const showProject = (num) => {
    // Go to first project, after clicking forward from last button
    if (num > project.length) {
        slideIndex = 1
    }

    //Go to last project, after cling backwards from first project
    if (num < 1) {
        slideIndex = project.length
    }

    //Loop to hide all projects
    for (let i = 0; i < project.length; i++) {
        project[i].style.display = "none"
    }
    project[slideIndex - 1].style.display = "flex"
}

const navigateProject = (num) => {
    // Change the slideindex based on back or forward arrow
    showProject((slideIndex += num))
}

showProject(slideIndex)