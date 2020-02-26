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
 - Complete the required fields (Name, Description and the first URL field). Use the URL to your iPart or the link to the sample iPart in the link above.
 
![content type screen shot](https://raw.githubusercontent.com/Advsol/jQuery-interceptor/master/images/content-type.PNG)
	 - 
 - Save the iPart/Content Type

### Testing your iPart

Create a piece of Content, in RiSE and add your iPArt to that content.

 - As a staff user, navigate to: **RiSE -> Page Builder -> Manage content**
 - Click **New** and select **Website Content**
 - Fill out the required fields and make sure to check Create navigation on publish
	 - Select the location in the Navigation menu for your new content
	 - Click **Save & Publish**
	 
After a short delay your  your iPart navigation item and content should be published and on navigating to your new content, you should see an alert followed by the JSON returned by the API.
![sample ipart](https://raw.githubusercontent.com/Advsol/jQuery-interceptor/master/images/ipart-result.PNG)

