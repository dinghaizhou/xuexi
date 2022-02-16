class Promise {
    constructor(cb) {
        let status = 'pending';

        function reslove(res) {
            this.status = 'filled';
            this.then(res);
        }
        function reject(err) {
            this.status = 'failed';
            this.catch(err);
        }
        cb(reslove, reject)
        
    }
    then(fn) {

    }
    catch(fn) {
        
    }
}