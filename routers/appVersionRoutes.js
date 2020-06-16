const express = require("express");
const router = new express.Router();
const versionModel = require('../models/appVersion')

router.post('/api/updateAndroidVersion', async (req,res)=>{
    console.log('inside updateAndroidVersion')

    // check the client secret value first
    if(process.env.CLIENT_SECRET !== req.body.clientSecret){
        res.status(500).json({success: false, message: 'Invalid client secret provided'});
        return
    }

    // if version is not provided
    if(!req.body.version){
        res.status(500).json({success: false, message: 'version is required.'});
        return 
    }

    try {
        const appVersion = new versionModel({
            version: req.body.version,
            isActive: true,
            appType: 'android',
            url: req.body.url || 'https://play.google.com/store/apps/details?id=co.blucocoondigital.healthapp&hl=en'
        })
        await appVersion.save()
        res.status(200).json(appVersion)

    } catch(err){
        console.error(err)
        res.status(500).json({success: false, message: err})
    }
})



router.post("/api/getAndroidVersion",async(req, res) => {
    console.log("inside getAndroidVersionInfo",req.body);

    try {   
        const versionRes = await versionModel
        .find({ isActive: true, appType: 'android' })
        .limit(1)
        .sort({ $natural: -1 });
        if(versionRes.length === 0){
            throw new Error('Version data not found')
        }

        res.status(200).json({data: versionRes[0]})
    } catch(err){
        console.error(err)
        res.status(500).json({success: false, message: err})
    }
});

module.exports = router;