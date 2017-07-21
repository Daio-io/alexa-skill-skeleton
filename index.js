'use strict';

const Alexa = require('alexa-sdk');
// got http client
const got = require('got');

// Help message needs to tell the user what they can say to use your skill. Give an example like. You can say, when is the my bus coming
// `you can folloe this up with a prompt. Here I have used ... to pause Alexa before saying 
const HELP_MESSAGE = "You can say, when is the next bus to Cardiff?, or you can say exit... Ask me when the next bus is";
const HELP_REPROMPT = "Ask me when the next bus is";
const STOP_MESSAGE = "Goodbye!";
const WELCOME_MESSAGE = "Hello, Ask me when the next bus is";
const WELCOME_REPROMPT = "Ask me when the next bus is"
const SKILL_NAME = "My Skill"

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

function getExample(that) {

    got('http://example-request-url').then(res => {
        try {
            let data = JSON.parse(res.body)
            if (data.status === 'success') {
                let text = "hello this is the text you should set to say something"
                // Tell with card adds a card to the users alexa companion app so they can read it later
                that.emit(':tellWithCard', text, SKILL_NAME, text)
            } else {
                // Handle errors and use a reprompt so that alexa prompts the user again when they do not respond
                that.emit(':ask', 'Im sorry, there was a problem, please try again', WELCOME_REPROMPT)
            }
        } catch (err) {
            that.emit(':ask', 'Im sorry, there was a problem, please try again' + err, WELCOME_REPROMPT)
        }
    }).catch(err => {
        that.emit(':ask', 'Im sorry, there was a problem, please try again' + err, WELCOME_REPROMPT)
    })
}

const handlers = {
    'ExampleIntent': function () {
        // Bit hacky but passing `this` in. Should just bind the `this` context.
        getExample(this)
    },
    'LaunchRequest': function () {
        this.emit(':ask', WELCOME_MESSAGE, WELCOME_REPROMPT)
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE
        const reprompt = HELP_REPROMPT
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', STOP_MESSAGE)
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};
