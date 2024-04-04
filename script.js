document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementsByClassName("btn")[0]; 

    let boxcolor = document.getElementsByClassName("box");

    console.log(boxcolor);
    generateButton.addEventListener("click", () => {
        function colorGenerator() {
            let randomColor1 = Math.floor(Math.random() * 256);
            let randomColor2 = Math.floor(Math.random() * 256);
            let randomColor3 = Math.floor(Math.random() * 256);
            return "rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")";
        }

        // Convert HTMLCollection to Array
        boxcolor = Array.from(boxcolor);
        console.log(boxcolor);

        boxcolor.forEach(e => {
            e.style.backgroundColor = colorGenerator();
        });

    });
});

