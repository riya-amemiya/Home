const xhr = new XMLHttpRequest();
const xhr_return = (num = 0, text) => {
    if (num == 200) {
        return text
    } else if (num == 4) {
        return text
    }
}
export {
    xhr,
    xhr_return
}