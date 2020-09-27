class code {
    constructor() {

    }
    print(print = "") {
        print = print.replace(/print/g, 'console.log')
    }
}
const Code = new code()
export default Code;