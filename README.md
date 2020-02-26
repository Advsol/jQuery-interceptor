# iMIS iPart jQuery Auth Interceptor

This library will assist in creating simple jQuery based iParts for iMIS.  It will handle authentication for all your HTTP requests to the iMIS API from javascript based iParts.

### Getting Started
Create an index.html file and place the following HTML:
```html
<pre id="result">
  Hi World
</pre>
<!--This is the path to the jQuery interceptor plugin-->
<script src="https://cdn.jsdelivr.net/gh/Advsol/jQuery-interceptor/build/asi-interceptor.min.js" polyfill></script>

<script type="text/javascript">

jQuery( document ).ready(function() {
  // init the plugin, you only need to do this once per page.
  var myplugin = new jQuery.asiInterceptor();
    jQuery.get( "api/Party?id=113", function( data ) {
        jQuery( "pre[id='result']" ).html( JSON.stringify(data));
        alert( "We got data!");
    });

});
</script>
```
or grab the demo file from [here](https://github.com/Advsol/jQuery-interceptor/blob/master/demo/index.html)

Save this in a file called index.html