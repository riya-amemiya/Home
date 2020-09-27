const ModalModern = (req) =>
{
    return `<div div class="modal-modern" >
                <label for="modal-1">
                    <div class="modal-trigger">${req.text}</div>
                </label>
                <input class="modal-state" id="modal-1" type="checkbox" />
                <div class="modal-fade-screen">
                    <div class="modal-inner">
                        <div class="modal-close" for="modal-1"></div>
                        <h1>${req.modal_text}</h1>
                        <p class="modal-intro">${req.modal_intro}</p>
                        <p class="modal-content">${req.modal_content}</p>
                    </div>
                </div>
            </div>`
}
export default ModalModern;