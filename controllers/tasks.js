var Task = require('../models/task');

exports.index = function(request, reply){
    Task.find().populate('priority').exec(function(err, tasks){
        reply(tasks);
    });
};

exports.new = function(request, reply){
    var t = new Task(request.payload);
    t.save(function(){
        reply(t);
    });
};

exports.delete = function(request, reply){
    Task.remove({_id:request.id}, function(err){
        reply('Task Deleted');
    });
};

exports.update = function(request, reply){
    Task.update({_id:request.id}, function(err){
        reply('Task Updated');
    });
};

exports.show = function(request, reply){
    Task.findbyid({_id:request.id}, function(err){
        reply('Task show');
    });
};