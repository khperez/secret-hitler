names = [
    "Winston Churchill",
    "Franklin D. Roosevelt",
    "Joseph Stalin",
    "Henry Truman",
    "Benito Mussolini"
]

$(document).ready(function () {
    $('i#createRandom').on('click', function () {
        document.getElementById("name").value = getRandomPerson();
    });
});

function getRandomPerson() {
    // TODO: make sure that the same person isn't generated twice
    return names[Math.floor(Math.random() * names.length)];
}