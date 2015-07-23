var _ = require('lodash');
var Q = require('q');
var settings = require('../../config/settings.json');
var nodemailer = require('nodemailer');

module.exports.sendFileQ = function(fileObj) {
    console.log('inside sendFileQ');
    var defer = Q.defer();
    
    var transporter = nodemailer.createTransport({
        service: settings.email.server,
        auth: {
            user: settings.email.username,
            pass: settings.email.password
        }
    });
    
    var mailOptions = {
        from: 'cdurth@gmail.com',
        to: fileObj.email,
        attachments: [
            {   
                filename: fileObj.name,
                path: fileObj.path,
                contentType: 'application/x-mobipocket-ebook'
            }
        ]
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log('Mailer error: '+ error);
        return defer.reject(error);
    }
        console.log('Message sent: ' + info.response);
        defer.resolve(info);
    });

    return defer.promise;
};