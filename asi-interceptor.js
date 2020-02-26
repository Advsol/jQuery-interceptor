(function($) {
    $.asiInterceptor = function() {

        var pathJoin = function(parts){
            const separator = '/';
            parts = parts.map((part, index)=>{
                if (index) {
                    part = part.replace(new RegExp('^' + separator), '');
                }
                if (index !== parts.length - 1) {
                    part = part.replace(new RegExp(separator + '$'), '');
                }
                return part;
            })
            return parts.join(separator);
         }

        var init = function() {
            // pull the settings out of the dom
            const data = (document.querySelector("#__ClientContext")).value;
            const appContext = JSON.parse(data);
            appContext.headers = {};
            appContext.headers['RequestVerificationToken'] = (document.querySelector("#__RequestVerificationToken")).value;

            // intercept all ajax requests and add our cross site scripting header plus URL suffix
            jQuery.ajaxSetup({
                beforeSend: function (xhr,setting) {
                    alert( "11111");
                    xhr.setRequestHeader('RequestVerificationToken', appContext.headers['RequestVerificationToken'])
                    setting.url = pathJoin([appContext.baseUrl,  setting.url])
                    console.log("---------------");
                    console.log(setting.url);
                }
                
            });
        }
        // call the "constructor" method
        init();
    }
})(jQuery);
