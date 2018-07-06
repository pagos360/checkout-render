(function (win, doc) {

    'use strict';

    const payButton = doc.getElementById('pagos360-pay-button');

    const overlay = doc.createElement('div');
    overlay.id = 'p360-modal-overlay';
    overlay.setAttribute('style', `
            position: fixed; 
            top: 0; 
            bottom: 0; 
            left: 0; 
            right: 0; 
            opacity: 0.3; 
            width: 100%; 
            height: 100%; 
            background-color: black;
        `);

    const overlayWrapper = doc.createElement('div');
    overlayWrapper.id = 'p360-modal-overlay-wrapper';
    overlayWrapper.appendChild(overlay);
    overlayWrapper.setAttribute('style', `
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: absolute;
        `);

    const popbox = doc.createElement('iframe');
    popbox.id = 'p360-modal-popbox';
    popbox.src = payButton.href;
    popbox.setAttribute('style', `
            border: 0;
            width: 350px;
            height: 400px;
        `);

    const contentFixed = doc.createElement('div');
    contentFixed.id = 'p360-modal-content-fixed';
    contentFixed.appendChild(popbox);
    contentFixed.setAttribute('style', `
            top: 50%;
            left: 50%;
            position: fixed;
            overflow: hidden;
            border-radius: 6px;
            border: 1px solid #999;
            box-shadow: -5px 5px 15px 0 rgba(0, 0, 0, .2);
            -webkit-border-radius: 6px;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
        `);

    doc.body.appendChild(overlayWrapper);
    doc.body.appendChild(contentFixed);

    doc.getElementById('p360-modal-overlay-wrapper').style.display = 'none';
    doc.getElementById('p360-modal-overlay').style.display = 'none';
    doc.getElementById('p360-modal-content-fixed').style.display = 'none';

    /**
     * Bind a element event with a 
     * callback function.
     * 
     * @param {*} el 
     * @param {*} eventName 
     * @param {*} handler 
     */
    function on(el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function () {
                handler.call(el);
            });
        }
    }

    /**
     * Open the modal.
     * 
     * @param {*} event 
     */
    function openModal(event) {
        doc.getElementById('p360-modal-overlay-wrapper').style.display = '';
        doc.getElementById('p360-modal-overlay').style.display = '';
        doc.getElementById('p360-modal-content-fixed').style.display = '';

        event.preventDefault();
    }

    /**
     * Hide the modal.
     */
    function hideModal() {
        doc.getElementById('p360-modal-overlay-wrapper').style.display = 'none';
        doc.getElementById('p360-modal-overlay').style.display = 'none';
        doc.getElementById('p360-modal-content-fixed').style.display = 'none';
    }

    /**
     * Hide the modal if press ESC.
     * 
     * @param {*} event 
     */
    function hideModalWithEsc(event) {
        //kill pop if button is ESC ;)
        if (event.keyCode == 27) {
            hideModal();
        }
    }

    on(payButton, 'click', openModal);
    on(win, 'keydown', hideModalWithEsc);
    on(overlayWrapper, 'click', hideModal);
})(window, document)