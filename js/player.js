class Player {

    constructor() { }


    getCount() {

        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function (count) {

            playerCount = count.val();

        })
    }


    updateCount(playerC) {

        database.ref("/").update({

            playerCount: playerC

        })
    }



    update(name) {

        database.ref("player" + playerCount).set({

            name: name



        })



    }












}