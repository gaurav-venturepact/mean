const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db= "mongodb://localhost:27017/videoplayer";

//const db = "mongodb://usergaurav:gaurav@ds231658.mlab.com:31658/videoplayer";
mongoose.Promise = global.Promise;

// Connect to Mongo Database

mongoose.connect(db, function(err){
    if (err){
        console.error("Error" + err);
    }
});

// Fetching all videos.

router.get('/videos', function(req, res){
    console.log('Get request for all vidoes');
    Video.find({})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        } else{
            res.json(videos);
        }
    }); 
});

// Fetching a Video

router.get('/video/:id', function(req, res){
    console.log('Get request for a single video');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if (err){
            console.log("Error retrieving videos");
        } else{
            res.json(video);
        }
    }); 
});

// Insert Video

router.post('/video',function(req, res){
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if (err){
            console.log('Error saving video');
        } else{
            res.json(insertedVideo);
        }
    });
});

//Update Video

router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,{
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if (err){
            res.send("Error while updating Video");
        }else{
            res.json(updatedVideo);
        }
    });
});

// Deleting or removing a video

router.delete('/video/:id',function(req, res){
    console.log('Deleting Video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if (err){
            res.send("Error while deleting");
        } else{
            res.json(deletedVideo);
        }
    });
});  

module.exports = router;