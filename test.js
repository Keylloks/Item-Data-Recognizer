var cat = require('./category.json');
var fs = require('fs');
var Regex = require("regex");
const _ = require('lodash');
const fileExists = require('file-exists');

//var dataa = monJson.data;
var datacat = cat.categories;
var array = []
var param = process.argv[2];
var chaine;

console.log('Param: ' + param);
var monjson = require('./' + param);
let data1 = {};
let data2 = [];
datacat.forEach((dc) => {
    monjson.data.forEach((j) => {
        let newregex = new RegExp(dc.category, 'i');
        let newregex1 = new RegExp(`^${dc.category}$`, 'i');
        let newregex2 = new RegExp(`^${dc.categorycode}$`, 'i');
        if (j.category != null && j.category.match(newregex1)) {
            //            console.log(newregex1);
            data1[dc.category] = [];
            data1[dc.category].push(j);
            data2.push(j);
            data1[dc.category] = data2;
        } else if (j.categorycode != null && j.categorycode.match(newregex2)) {
            data1[dc.category] = [];
            data1[dc.category].push(j);
            data2.push(j);
            data1[dc.category] = data2;
        } else if (j.description.match(newregex) && (j.category == null || j.category == '') && (j.categorycode == null || j.categorycode == '')) {
            data1[dc.category] = [];
            data1[dc.category].push(j);
            data2.push(j);
            data1[dc.category] = data2;
        }

    })
    data2 = [];
})

console.log("------------------------------------------------------------------------------------");
console.log('data1 = ', data1);

chaine = JSON.stringify(data1);
fs.writeFile('./monFichier.json', chaine, function (error) {
    console.log(error);
});
//var o = 0;
//var id;
//let separated;
//
//var test = 'toto est titi';
//console.log(test.match(/Toto/i));
//json1.data.forEach((jkey, value) => {
//    datacat.forEach((dkey) => {
//        if (dkey.categorycode === jkey.categorycode) {
//            console.log(dkey.category);
//        }
//    })
//})
//const pantalon = [];
//json1.data.forEach((jkey, value) => {
//    if (jkey.description.match(/jogging|pantalon de sport/i)) {
//        pantalon.push(jkey);
////        console.log(jkey)
//    }
//
//})

//pantalon: [
//    {
//        
//    }
//]
//
//const attr = [];
//datacat.forEach((key) => {
//    let i = _.findIndex(attr, (a) => {
//        return a === key.category;
//    });
//    if (i === -1) {
//        attr.push(key.category);
//    }
//})

//console.log(JSON.stringify(attr));
/*let data1 = {};
let data2 = [];
datacat.forEach((dc) => {
    monjson.data.forEach((j) => {
        let newregex = new RegExp(dc.category, 'i');
        let newregex1 = new RegExp(`^${dc.category}$`, 'i');
        let newregex2 = new RegExp(`^${dc.categorycode}$`, 'i');
        if (j.category != null && j.category.match(newregex1)) {
            //            console.log(newregex1);
            data1[dc.category] = [];
            data1[dc.category].push(j);
            data2.push(j);
            data1[dc.category] = data2;
        } else if (j.categorycode != null && j.categorycode.match(newregex2)) {
            data1[dc.category] = [];
            data1[dc.category].push(j);
            data2.push(j);
            data1[dc.category] = data2;
        } else if (j.description.match(newregex) && (j.category == null || j.category == '') && (j.categorycode == null || j.categorycode == '')) {
            data1[dc.category] = [];
            data1[dc.category].push(j);
            data2.push(j);
            data1[dc.category] = data2;
        }

    })
    data2 = [];
})

console.log("------------------------------------------------------------------------------------");
    console.log('data1 = ', data1);*/

//console.log(data1);

//for (var i in data) {
//    id = data[i].description;
//    separated = id.split(" ");
//
//    //if (id != null)
//    //console.log(id);
//    //else
//    //console.log('diff');
//}
