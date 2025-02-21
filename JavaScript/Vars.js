var articles_all = 27;

var variables = ["articles_all"];

for (var i = 0; i < variables.length; i++) {
    try {
        document.getElementById(variables[i]).innerHTML = window[variables[i]];

    } catch (error) {

    }
}
