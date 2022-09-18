/**
 * Responsible for listening for click input on the move buttons
 */
class InputController {
    constructor(sceneController) {
        const movementAmount = 20;
        this.sceneController = sceneController;
        document.getElementById('up').addEventListener('click', ()=> {
            this.sceneController.move(0,movementAmount);
        });
        document.getElementById('down').addEventListener('click', ()=> {
            this.sceneController.move(0,-movementAmount);
        });
        document.getElementById('left').addEventListener('click', ()=> {
            this.sceneController.move(-movementAmount,0);
        });
        document.getElementById('right').addEventListener('click', ()=> {
            this.sceneController.move(movementAmount,0);
        });
    }
}

export {InputController}
