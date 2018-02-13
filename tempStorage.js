var tempStorage = {
        get: function (name) {
            var now = Math.floor(Date.now() / 1000);
            var _lsd = localStorage.getItem(name);
            if(_lsd == null) return null;
            var obj = JSON.parse(_lsd);
            if(obj.expire >= now){
                return obj.data;
            } else {
                localStorage.removeItem(name);
                return null;
            }
        },
        set: function (name, value, expire = 3600) {
            var now = Math.floor(Date.now() / 1000);
            expire = now + expire;
            var obj = {
                data: value,
                expire: expire
            };
            localStorage.setItem(name, JSON.stringify(obj));
        }
    };