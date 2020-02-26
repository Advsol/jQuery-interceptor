# iMIS iPart jQuery Auth Interceptor

This library will assist in creating simple jQuery based iParts for iMIS.  It will handle authentication for all your HTTP requests to the iMIS API from javascript based iParts, automatically adding on the RequestVerificationToken, from the DOM and correctly setting the path for your jQueryXHR requests.

## Getting Started
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

Save this in a file called index.html and upload it to your cloud storage/host.  For this demo we have added it to a to the demo folder in the repo.

Our sample ipart is located here:
[https://raw.githubusercontent.com/Advsol/jQuery-interceptor/master/demo/index.html](https://raw.githubusercontent.com/Advsol/jQuery-interceptor/master/demo/index.html)

### Configuring the iPart in iMIS

 - Log into imis as a Staff user
 - Navigate to: **RiSE -> Maintenance -> Content types**
 - Click **New** and select **Content-Type**
 - Select **Client-based (preferred)**
 - Fill out the Name Description and the first URL field (use the URL to your iPart or the one above)
![content type screen shot](https://raw.githubusercontent.com/Advsol/jQuery-interceptor/master/images/content-type.PNG)
	 - 
 - Save the iPart/Content Type

### Testing your iPart

Create a piece of Content, in RiSE
