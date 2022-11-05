//TEXTO INTRO - HOME CV

{
    const paragraphHTML = document.querySelector(".textIntro");
    const textWriteSelf = " Olá, eu me chamo Víctor ! E este é meu currículo digital, agradeço sua visita e aproveite a navegação.";
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
}