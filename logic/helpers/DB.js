/********************
 * Database Manager  *
 *********************/

const fs = require("fs");
const config = require("../../config.js");
const uid = require(config.LOGIC + "/helpers/uid.js");
const { User, Room, Message } = require("./_DB.js");

var TOKEN_PAIRS = {};

const DB = {

    addTokenPair: function(token, _token) {
        TOKEN_PAIRS[token] = _token;
    },

    getTokenPair: function(token) {
        return TOKEN_PAIRS[token];
    },

    delTokenPair: function(token) {
        delete TOKEN_PAIRS[token];
    }
};

module.exports = DB;
