'use strict';

module.exports = {
  __init__: [
    'camundaCopyPasteBehaviour',
    'camundaCopyPasteRootElementBehaviour',
    'camundaRemoveInitiatorBehaviour',
    'camundaRemoveVariableEventBehaviour'
  ],
  camundaCopyPasteBehaviour: [ 'type', require('./CopyPasteBehaviour') ],
  camundaCopyPasteRootElementBehaviour: [ 'type', require('./CopyPasteRootElementBehaviour') ],
  camundaRemoveInitiatorBehaviour: ['type', require('./RemoveInitiatorBehaviour') ],
  camundaRemoveVariableEventBehaviour: ['type', require('./RemoveVariableEventBehaviour') ]

};