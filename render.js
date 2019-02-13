(function (win, doc) {

    "use strict";

    const payButton = doc.getElementById("pagos360-pay-button");

    const overlay = doc.createElement("div");
    overlay.id = "p360-modal-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.bottom = "0";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.opacity = "0.3";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "black";

    const overlayWrapper = doc.createElement("div");
    overlayWrapper.id = "p360-modal-overlay-wrapper";
    overlayWrapper.appendChild(overlay);
    overlayWrapper.style.top = "0";
    overlayWrapper.style.bottom = "0";
    overlayWrapper.style.left = "0";
    overlayWrapper.style.right = "0";
    overlayWrapper.style.position = "absolute";

    const popbox = doc.createElement("iframe");
    popbox.id = "p360-modal-popbox";
    popbox.src = payButton.href;
    popbox.style.border = "0";
    popbox.style.width = "100%";
    popbox.style.height = "100%";

    const contentFixed = doc.createElement("div");
    contentFixed.id = "p360-modal-content-fixed";
    contentFixed.appendChild(popbox);
    contentFixed.style.height = "34rem";
    contentFixed.style.maxHeight = "90%";
    contentFixed.style.width = "25rem";
    contentFixed.style.maxWidth = "90%";
    contentFixed.style.top = "50%";
    contentFixed.style.left = "50%";
    contentFixed.style.position = "fixed";
    contentFixed.style.overflow = "hidden";
    contentFixed.style.borderRadius = "6px";
    contentFixed.style.border = "1px solid #999";
    contentFixed.style.boxShadow = "-5px 5px 15px 0 rgba(0, 0, 0, .2)";
    contentFixed.style.webkitBorderRadius = "6px";
    contentFixed.style.transform = "translate(-50%, -50%)";
    contentFixed.style.msTransform = "translate(-50%, -50%)";
    contentFixed.style.webkitTransform = "translate(-50%, -50%)";
    
    doc.body.appendChild(overlayWrapper);
    doc.body.appendChild(contentFixed);

    doc.getElementById("p360-modal-overlay-wrapper").style.display = "none";
    doc.getElementById("p360-modal-overlay").style.display = "none";
    doc.getElementById("p360-modal-content-fixed").style.display = "none";

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
            el.attachEvent("on" + eventName, function () {
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
        doc.getElementById("p360-modal-overlay-wrapper").style.display = "";
        doc.getElementById("p360-modal-overlay").style.display = "";
        doc.getElementById("p360-modal-content-fixed").style.display = "";

        event.preventDefault();
    }

    /**
     * Hide the modal.
     */
    function hideModal() {
        doc.getElementById("p360-modal-overlay-wrapper").style.display = "none";
        doc.getElementById("p360-modal-overlay").style.display = "none";
        doc.getElementById("p360-modal-content-fixed").style.display = "none";
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

    on(payButton, "click", openModal);
    on(win, "keydown", hideModalWithEsc);
    on(overlayWrapper, "click", hideModal);
})(window, document)