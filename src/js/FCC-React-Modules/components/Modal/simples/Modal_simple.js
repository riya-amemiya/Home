const ModalSimple = (req) => {
    `<div class="modal-simple">
                    <div class="modal-inner">
                        <div class="modal-header">
                        </div>
                        <div class="modal-introduction">
                            <h2 class="modal-h2">${req.h2}</h2>
                            <p>${req.text}</p>
                            <p>${req.text2}</p>
                        </div>
                        <button class="modal-close-btn blake">とじる</button>
                    </div>
                </div>`
}
export default ModalSimple