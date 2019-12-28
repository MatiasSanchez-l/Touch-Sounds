window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60b394",
        "#608eb3",
        "#6068b3",
        "#a960b3",
        "#b36067",
        "#abb360"
    ];

    console.log(sounds[0]);

    //sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function()
        {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createCircles(index);
        });
    });

    //funcion que hara los circulos
    const createCircles = (index) =>
    {
        const circle = document.createElement("div");
        visual.appendChild(circle);
        circle.style.backgroundColor = colors[index];
        circle.style.animation = 'jump 1s ease';
        circle.addEventListener('animationend', function()
        {
            visual.removeChild(this);
        });
    };
});

