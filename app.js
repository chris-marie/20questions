/**
 * Created by chris on 11/10/14.
 */

var express = require('express'),
    u = require('underscore'),
    mongo = require('mongodb'),
    path = require('path'),
    jade = require('jade');

app = express();
app.set('port', process.env.PORT || 3000);

module.exports = app;



