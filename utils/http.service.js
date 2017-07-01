export default (() => {
    let _service;

    return {
        set service(httpService) {
            if (_service) throw 'Http service already exist';
            _service = httpService;
        },
        get service() {
            return _service;
        }
    }
})()