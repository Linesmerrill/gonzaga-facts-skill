'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined;

var SKILL_NAME = "gonzaga's fun facts";
var GET_FACT_MESSAGE = "Here's your interesting fact: ";
var HELP_MESSAGE = "You can say tell me a fact about Gonzaga, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "How can I help you?";
var STOP_MESSAGE = "Have a great day!";

var data = [
  "Bing Crosby, the crooner most famously associated with songs about Christmas and your gun-toting mother, attended Gonzaga for three years, but did not earn his degree.",
  "Total enrollment as of two-thousand-seventeen is seven-thousand-five-hundred-and-seventy-two students",
  "Gonzaga head coach Mark Few, the winningest active coach by percentage at .809, and enjoys fly fishing.",
  "Gonzaga was established in eighteen-eighty-seven. Two years later in eighteen-eighty-nine, Washington, the state in which the college resides, achieved statehood.",
  "Spokane, Washington, where Gonzaga is located, hosted the first Father’s Day celebration in ninteen-ten.",
  "Despite the small number of enrolled students there are more than one-hundred buildings on campus!",
  "Gonzaga’s streak of eighteen straight NCAA Tournament appearances is the fourth longest active streak, behind fellow tournament teams Kansas, Duke and Michigan State.",
  "Men's sports include: Baseball, Basketball, Cross Country, Golf, Rowing, Soccer, Tennis, and Track and Field",
  "Women's sports include: Basketball, Cross Country, Golf, Rowing, Soccer, Tennis, Track and Field, and Volleyball",
  "The pronunciation is Gone - ZAG (as in bag) - uh",
  "The students are actively engaged with the local community, serving over one-hundred-thousand hours annually!",
  "Nearly all students receive some form of Financial Aid, ninety-eight-percent received financial aid as of two-thousand-seventeen"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
