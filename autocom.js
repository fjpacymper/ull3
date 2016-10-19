<!-- HTML5 -->
<input id="datos">

/* Javascript */
var input = document.getElementById('datos');
new Awesomplete(input, {
    list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
});
