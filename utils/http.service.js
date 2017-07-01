export default (() => {
    let _service;

    return {
        set service(httpService) {
            if (_service) throw new Error('Http service already exist');
            _service = httpService;
        },
        get service() {
            return _service;
        }
    }
})()