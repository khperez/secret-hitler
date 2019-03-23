names = ["Winston Churchill",
         "Franklin D. Roosevelt",
         "Joseph Stalin",
         "Henry Truman",
         "Benito Mussolini"]

$(document).ready(function() {
    $("i.fas.fa-random").on("click", function() {
        document.getElementById("create-name").value = getRandomPerson();
    });
});

function getRandomPerson() {
    return names[Math.floor(Math.random()*names.length)];
}