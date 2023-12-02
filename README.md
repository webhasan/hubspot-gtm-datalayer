# GTM dataLayer for Hubspot From Tracking Including Submission Values

### How to use 
1. In Google Tag Manager, create a new tag as a custom HTML tag.
2. Inside the tag, paste the entire code from the `hubspot-datalayer.js` file provided in this repository. Don't forget to wrap the code with <script> tag.
3. Set the trigger to fire on All Pages page views.

Once you've configured this setup, you'll begin receiving Google Tag Manager dataLayer events as `hubspot_form_submit`. You will get form ID as ***formId*** and all other form inputs as ***inputs*** object.

