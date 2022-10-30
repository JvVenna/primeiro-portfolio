{
    const paragraphHTML = document.querySelector("#text");
    const textWriteSelf = "Feito por Víctor"; //Texto que se autoescreverá
    const interval = 100; //intervalo de tempo (ms)

    function ShowText(paragraphHTML, textWriteSelf, interval) { //função para autoescrita

        const char = textWriteSelf.split("").reverse(); /* dentro de 'char' o '.split' subdivide o texto ("") => pq todo texto será usado
        e 'reverse' iniciará da esquerda para direita*/

        const typer = setInterval(() => { //setar intervalo como 'typer'

            if (!char.length) { //se o texto estiver terminado
                return clearInterval(typer); //então limpe o intervalo
            }

            const next = char.pop(); //tirar última letra do elemento char com o método .pop

            paragraphHTML.innerHTML += next;// execute no elemento 'el'

        }, interval); //o setInterval terá o valor de fora do escopo

    }

    ShowText(paragraphHTML, textWriteSelf, interval);
}

//TEXTO 2 - INDEX

{
    const paragraphHTML = document.querySelector("#text2");
    const textWriteSelf = "Ver currículo digital";
    const interval = 100;

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

//TEXTO 3 - INDEX

{
    const paragraphHTML = document.querySelector("#text3");
    const textWriteSelf = "Mais em breve";
    const interval = 100;

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