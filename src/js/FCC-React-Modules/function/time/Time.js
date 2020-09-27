let result = null;
let time = 1000;
let text = () => {
    return null
}
let Function = () => {
    return null
}
const timeout = (msec) => new Promise(resolve => {
    setTimeout(resolve, msec)
});
const Time_funciton = (reqid) => {
    if (result !== null) {
        Function()
        reqid.innerHTML = `<div>${result()}</div>`
    }
    throw new Promise(async (resolve) => {
        await timeout(time);
        result = text
        resolve();
    })
};
const Time = (req, reqid) => {
    reqid = document.getElementById(reqid)
    if (req.time != null) {
        time = req.time;
    }
    if (req.text != null) {
        text = req.text;
    }
    if (req.Function != null) {
        Function = req.Function;
    }
    Time_funciton(reqid)
}
export default Time;