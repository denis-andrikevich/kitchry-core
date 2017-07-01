export default (() => {
    let _service;

    return {
        set service(storageService) {
            if (storage) throw 'Local storage already exist';
            _service = storageService;
        },
        get service() {
            return _service;
        }
    }
})()