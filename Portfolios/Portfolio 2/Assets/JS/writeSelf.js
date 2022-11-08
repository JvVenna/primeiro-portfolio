const paragraphHTML = document.querySelector(".citationInicio");
const textWriteSelf = '"Uma máquina consegue fazer o trabalho de 50 homens ordinários. Nenhuma máquina consegue fazer o trabalho de um homem extraordinário."'; //Texto que se autoescreverá
const interval = 50;

function ShowText(paragraphHTML, textWriteSelf, interval) {

    const char = textWriteSelf.split("").reverse();


    const typer = setInterval(() => {

        if (!char.length) {
            return clearInterval(typer);

        }

        const next = char.pop();

        paragraphHTML.innerHTML += next;

    }, interval);

}

ShowText(paragraphHTML, textWriteSelf, interval);
