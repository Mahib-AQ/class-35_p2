class Form {

    constructor() { }

    display() {

        var title = createElement("h2")

        title.html("Car Racing")
        title.position(250, 50);

        var input = createInput("Your Name");
        input.position(250, 230);

        var button = createButton("Press to enter the Game");
        button.position(250, 250);
        var greeting = createElement("h3");


        button.mousePressed(function () {

            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;

            player.update(name);

            player.updateCount(playerCount);

            greeting.html("Welcome " + name);
            greeting.position(300, 200);


        })


    }


}