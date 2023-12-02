window.addEventListener("message", function(event) {
    if(!(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted')) return;

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: 'hubspot_form_submit',
        formId: event.data.id,
        conversionId: event.data.data.conversionId,
        formGuid: event.data.data.formGuid,
        inputs: event.data.data.submissionValues
    });
});
