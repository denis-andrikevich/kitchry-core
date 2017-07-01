export default (() => {
    let lib;

    return {
        set lib(someLib) {
            lib = someLib;
        },
        get lib() {
            return lib;
        }
    }
})()