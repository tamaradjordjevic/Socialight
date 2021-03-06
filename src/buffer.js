(function (window) {
  "use strict";

    window.Buffer = function () {};

    Buffer.prototype = {
        _request: function (resolve, reject) {
            this.endpoint  = "https://api.bufferapp.com/1/links/shares.json?url={url}".replace("{url}", this.url);

            xhr.jsonp(this.endpoint, function (data) {
                resolve({
                    count: data.shares,
                    name: "share-buffer"
                });
            });
        },
        promise: function (url) {
            this.url = url;
            return new Promise(this._request.bind(this));
        }
    };
}(window));
