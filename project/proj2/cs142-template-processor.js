"use strict";

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    let filledTemplate = this.template;

    const regex = /{{(.*?)}}/g;  // Regular expression to match properties within double curly braces {{...}}

    filledTemplate = filledTemplate.replace(regex, (match, propertyName) => (Object.prototype.hasOwnProperty.call(dictionary, propertyName) ? dictionary[propertyName] : "")); // match argument can be safely deleted

    return filledTemplate;
};