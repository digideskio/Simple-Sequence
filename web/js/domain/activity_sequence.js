//This is the root data model for the sequence diagram
function ActivitySequence(scriptContent) {



    this.draw = function(canvasManager, scriptContent) {
        canvasManager.removeAllEntities();
        var newEntities = getEntities(scriptContent);
        for (var i in newEntities) {
            var entity = newEntities[i];
            canvasManager.addEntity(entity);
        }
        canvasManager.removeAllMessages();
        var messageParser = new MessageParser();
        var messages = messageParser.parse(scriptContent);
        var messageConverter = new MessageConverter();
        for (var i in messages) {
            var message = messages[i];
            var pMessage = message.accept(messageConverter);
            canvasManager.drawPresentationMessage(pMessage);
            messageConverter.topMargin = pMessage.top + pMessage.getHeight();
        }
    }
}
