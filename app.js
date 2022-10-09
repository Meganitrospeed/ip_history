//Web client part
const axios = require('axios').default;
//DB Handling part (with awesome PrismDB <3)
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
//Web server part
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
var datainfo = prisma.ip.findMany()
//Cron part
var CronJob = require('cron').CronJob;

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));
//I dont like this approach as its 1 request = db lookup, tried to do it with a function that got updated
//with the cronjob, but didnt work the way I expected to, need more work here
app.get('/data', async function (req, res) {
        res.json(await prisma.ip.findMany());
})

app.listen(port, () => {
    console.log(`JSON endpoint started at port  ${port}`)
})
//Execute once on app start and then we let the rest to the cron
axiosreq();
//An API toke is needed from ipinfo.io
function axiosreq (){
    axios.get('https://ipinfo.io?token=').then(function (response) {
        // The API call was successful!
        //console.log(response.data);
        //log(response.data);
        check(response.data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}


 async function log(data){
    const newUser = await prisma.ip.create({
        data: {
            ip: data.ip,
            city: data.city,
        },
    })
     console.log("logged new data");
 }

async function check(data){
    const ip = await prisma.ip.findUnique({
        where: {
            ip: data.ip,
        },
    })
    console.log(ip);
    //This took me way too long to get, but I was getting a TypeSet error because I was trying to see json properties of a null "ip.seen" but the object IP itself was a null as such the conditional ip.seen === null was throwing an error
    //Needed to fix this piece since I didnt check at the begining if ip.seen as null/undefined and it failed if an IP was not in DB before running
    if (ip === null){
        console.log("IP not seen before, registering " + data.ip + " because null object")
        log(data)

    }else if (ip === undefined) {
        console.log("IP not seen before, registering " + data.ip + "because undefined")
        log(data);
    }else{

        console.log("IP seen before, updating count for " + data.ip +" , current count is " + ip.seen)
        const updateUser = await prisma.ip.update({
            where: {
                ip: data.ip,
            },
            data: {
                seen: {
                    increment: 1,
                }
            },
        })
    }
}

var job = new CronJob(
    '* * 20 * * *',
    async function() {
        console.log('Cronjob has been executed');
        axiosreq();
        //jsondata();
    },
    null,
    true,
    'Atlantic/Canary'
);
