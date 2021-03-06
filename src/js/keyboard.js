(function() {
    document.onkeydown = function(e) {
        switch(e.which) {
            case 37: // left
                if (user.position.x > -3) {
                    var tween = new TWEEN.Tween({
                            x: user.position.x
                        })
                        .to({ x: user.position.x - 3 }, 500)
                        .onUpdate(function() {
                            user.position.x = this.x;
                        })
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();
                }
            break;

            case 38: // up
                var goUp = new TWEEN.Tween({
                        y: user.position.y
                    })
                    .to({ y: user.position.y + 3.5 }, 500)
                    .onUpdate(function() {
                        user.position.y = this.y;
                    })
                    .delay(0)
                    .easing(TWEEN.Easing.Exponential.Out);

                var goDown = new TWEEN.Tween({
                        y: 4
                    })
                    .to({ y: 0.5 }, 500)
                    .onUpdate(function() {
                        user.position.y = this.y;
                    }).delay(300)
                    .easing(TWEEN.Easing.Bounce.Out);

                goUp.chain(goDown);
                goUp.start();
            break;

            case 39: // right
                if (user.position.x < 3) {
                    var tween = new TWEEN.Tween({
                            x: user.position.x
                        })
                        .to({ x: user.position.x + 3 }, 500)
                        .onUpdate(function() {

                            user.position.x = this.x;
                        })
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start()
                }
            break;

            default: return;
        }
    }
})();
