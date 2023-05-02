//Slideshow project objects
const slideshow = {
    projects: [{projectName: "Bountiful Foods", proImg: "images/bountislide.png", proDesc: "Bountiful Foods is a fictious company that we were assigned develop a website for in my Web Frontend 1 class. HTML, CSS, and JavaScript were used to develop this website.", link: 'https://sskiles66.github.io/wdd230/bountiful_foods/index.html', alt: "Bountiful Foods Website"},
            {projectName: "Level Runner", proImg: "images/classesslide.png", proDesc: "Level Runner is my final project that I designed and developed in C# for my Programming with Classes class. Level Runner is a game where a player can play through a series of levels where the player has a choice between two levels for each level and the levels are randomized each time. Some levels can deal damage to the player but those levels also give the player more points so the whole point of the game is to survive the 10 levels with the most amount of points possible. This project displays concepts of abstraction, encapsulation, inheritance and polymorphism.", link: 'https://github.com/sskiles66/cse210-hw/tree/main/final/FinalProject', alt: "Level Runner in Github"},
            {projectName: "Tower Combat", proImg: "images/TCslides.png", proDesc: "Tower Combat is a turn based combat game that I developed in a game engine named Godot and I used a programming language named GDScript which is similar to Python. Every fight is randomized and the starting weapons and spells are randomized at the beginning of each run.", link: "https://youtu.be/0WpX7UaOOLs", alt: "Screenshot of Tower Combat"},
            {projectName: "YouTube Design ERD", proImg: "images/FinalYouTubeERDslides.png", proDesc: "During the course of my Database Design and Development class, we were assigned to design and develop a database on anything we wanted so I chose to do my database based on how I would think YouTube's database would work. This database was developed in MySQL. ", link: "", alt: "ERD of database design for YouTube"},
            {projectName: "Creepy Stardew Valley", proImg: "images/crepstarslides.png", proDesc: "Creepy Stardew Valley was my first game development project using Godot and I was able to develop some functionality like player movement, scene changes, dialogue, and some story elements but I ended up stopping developing when I realized that I needed some more technical knowledge before pursuing it further so I focused on other projects to help me learn.", link: "", alt: "Screenshot of Creepy Stardew Valley"},
            {projectName: "Arlington Chamber of Commerce", proImg: "images/chamberslides.png", proDesc: "This Arlington Chamber of Commerce site was an assignment for my Web Frontend 1 class. I used HTML, CSS, and JavaScrpt to develop it.", link: "https://sskiles66.github.io/wdd230/chamber/index.html", alt: "Arlington Chamber Website"},
            {projectName: "Stealth Game", proImg: "images/stealthslides.png", proDesc: "This is another small game that was made in Godot. The player controls a character and moves through a series of levels while avoiding sprites that have spotlights and if the player gets caught in them then its game over.", link: "", alt: "Screenshot of stealth game"}]
}





//Forward function
function forward(){
    let value = slideshow.projects[0];
    

    for (i=0;i<slideshow.projects.length;i++){
        slideshow.projects[i] = slideshow.projects[i + 1];   
    }
    
    slideshow.projects[slideshow.projects.length - 1] = value;
    output(); 
}

//Backward function
function backward(){
    let value = slideshow.projects[slideshow.projects.length - 1];

    for (i=slideshow.projects.length; i > -1;i--){
        slideshow.projects[i] = slideshow.projects[i - 1];
    }
    
    slideshow.projects[0] = value;
    slideshow.projects.pop();
    output();
    
}

//Output function that is called when going forward or backward in the slideshow
function output(){
    document.querySelector("#image1").src = slideshow.projects[0].proImg;
    document.querySelector("#image1").alt = slideshow.projects[0].alt;
    
    document.querySelector("#title").innerHTML = slideshow.projects[0].projectName;
    document.querySelector("#description").innerHTML = slideshow.projects[0].proDesc;

    document.querySelector("#link").href = slideshow.projects[0].link;
    document.querySelector("#link").innerHTML = slideshow.projects[0].link;
}


output();

//Event listeners
document.querySelector("#nextButton").addEventListener("click", forward);
document.querySelector("#backButton").addEventListener("click", backward);



