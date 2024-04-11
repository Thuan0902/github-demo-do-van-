// var array = [
//     {
//         id: 1,
//         name: "hungken",
//         age: 18
//     },
//     {
//         id: 2,
//         name: "thuan",
//         age: 20
//     },
//     {
//         id: 3 ,
//         name : "tm",
//         age: 20
//     }
// ]

// // console.log(array)

// // function arrays (array,index,originArray){
// //     return{
// //         index: index,
// //         id: array.id,
// //         name: `ten:  ${array.name}`,
// //         age: `tuoi: ${array.age}`,
// //         originArray: originArray,
// //     }
// // }

// // var newArray = array.map(arrays);

// // console.log(newArray);



// // var tongtuoi = 0;
// // for(var arr of array){
// //     tongtuoi += arr.age;
// // }
// // console.log(tongtuoi)
// // var i =0;
// // function tongAge (accumulator/*biến lưu trữ  */, currentValue /*biến hiện tại */, currentIndex /*chỉ mục hiện tại */, originArray/*array được gọi */){
// //     i++
// //     var total = accumulator + currentValue;
// //     console.table({
// //         'lượt chạy :' : i,
// //         'biến tích trữ : ': accumulator,
// //         'biến công thêm: ': currentValue.age,
// //         'biến tổng cộng: ': total,

// //     });
// //     console.log(currentValue);
// //     return accumulator + currentValue.age , total;
// // }

// var totalAge = array.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue.age;
// });


// //bai tap :

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]
// // var totalGold =0;
// // function getTotalGold(arr) { 
// //     return arr.reduce((acc,curr) => { return acc + curr.gold; },0); 
// //     }

// // // Expected results:
// // console.log(getTotalGold(sports)) // Output: 23

// var totalCoin  = sports.reduce(function(total, sports){
//     return total += sports.gold;

// },0)

// console.log(totalCoin)

// var numbers = [100,200,200,300,400];

// var totalMunber = numbers.reduce(function(total,number){
//     return total + number;
// })
// console.log(totalMunber);


// var depthArray = [1,2,[3,4],5,6,[7,8,9]];

// var flatArray =  depthArray.reduce(function(flatOutput,depthItem){
//     return flatOutput.concat(depthItem)
// },[])

// console.log(flatArray)

// var totalNameGold = sports.reduce(function(total,sport){
//     return total.concat(sport)
// },[])

// console.log(totalNameGold);


// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
  



// function find (directors){
//     return directors.Director == "Christopher Nolan"
// }

// var findDirector = watchList.filter(find)
// console.log(findDirector);
// function calculateRating(findDirector){
//     return findDirector.reduce((acc,curr) => {return parseFloat( acc) + parseFloat(curr.imdbRating)/findDirector.length},0)
// }
// // return arr.reduce((acc,curr) => { return acc + curr.gold; },0); 
  
//   // Expected results
//  console.log(calculateRating(watchList)); // Output: 8.675
  
  
  

  
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
//  function arrToObj(arr){
//      return arr.reduce(function(obj, current){
//          obj[current[0]] = current[1]
//          return obj
//      }, {})
//  }

// // Expected results:

// console.log(arrToObj(arr)) // { name: 'Sơn Đặng', age: 18 }


// function sumCb(a, b) {
//     return a+b;
// }
// function subCb(a, b) {
//     return a-b;
// }
// function multiCb(a, b) {
//     return a*b;
// }
// function divCb(a, b) {
//     return a/b;
// }
// function caculate(a, b, cb) {
//     return cb(a, b);
// }
// console.log(caculate(1,2,sumCb));

// var couser = [
//     'js',
//     'php',
//     'ruby'
// ];


// Array.prototype.myMap = function(cb) {
//     arrayLength = this.length;
//     var output = [];
//     for(var i=0;i<arrayLength;++i){
//         var result = cb(this[i],i);
//         output.push(result);
//     }
//     return output;
// }
// function meMap(couser,index){
//     return `<h2>${couser }</h2>`;
// }
// // var htmls = couser.myMap(meMap);

// // console.log(htmls.join(" "));

// Array.prototype.forEach2 = function(callback){
//     var arrayLength = this.length;
//     var output = [];
//     for(var i=0;i<arrayLength;i++){
//         var result =  callback(this[i],i);
//         output.push(result);
//     }
//     return output;
// }

// var htmlss= couser.forEach2(function(cousers,index){
//     return `language ${index} ${cousers}`;
// })

// var htmls = couser.myMap(meMap);
// console.log(htmls);
// console.log(htmlss.join(''));

// const ages = [3, 10, 18, 20];
// Array.prototype.fill2 = function(callback){
//     var arrayLength = this.length;
//     var output = [];
//     for(var i =0 ;i<arrayLength;i++){
        

//     }
    
//     return output;
    
// }

// function checkAge(age){
//     age > 18;
//     return `Age ${age}`;
// }

// var htmlsss = ages.fill2(checkAge);
// console.log(htmlsss.join('  '));


// Array.prototype.forEach2=function(callback){
//     for( index in this){
//         if(this.hasOwnProperty(index)){
//         callback(this[index], index,this);
//         }
//     }
// }

// var courses = [
//     'js',
//     'php',
//     'ruby'
// ]

// courses.forEach2(function(course,index,array){
    
//     console.log(course,index,array);
// }) ;

// var courses = [
//     {
//         name: 'JS',
//         coin: '980',
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: '320',
//         isFinish: true,
//     },
//     {
//         name: 'RUBY',
//         coin: '1000',
//         isFinish: true,
//     },

// ]
// Array.prototype.filter2=function(callback){
//     var output =[];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result= callback(this[index],index,this)
//             if(result){
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }


// var filterCorses = courses.filter2(function(courses,index,array){
    
//     return courses.coin > 500;
// })

// console.log(filterCorses)

// Array.prototype.some2=function(callback){
//     var output =false;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             if(callback(this[index],index,this) == true){
//             return true;
//             break;}

//         }
//     }
//     return output;
// }


// var myisFinish = courses.some2(function(course,index,array){
//     console.log(index)
//     return course.isFinish;
// })
// console.log(myisFinish);

// Array.prototype.every2 = function(callback){
//     var output = true;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index],index,this)
//             if(result == false){
//                 output=false;
//                 break;
//             }
//         }
//     }
//     return output;
// }



// var myisEvery = courses.every2(function(course,index,array){
//     return course.coin > 500;
// })
// console.log( myisEvery);


//HTML DOM 

//1. Element : ID , CLASS, TAG

// var headingNode =  document.getElementById('heading');

// console.log({
//     element: headingNode
// }); 

// var textNode =  document.getElementsByClassName('text');

// console.log(textNode); 

// var tagNode =  document.getElementsByTagName('h1');

// console.log(tagNode); 

// var headingNodes =  document.querySelector('.text')
// console.log(headingNodes)

// css selector, HTML collection


// var heading =document.getElementById('heading');
// var heading =document.querySelector('h1');

// heading.title='heading';
// heading.title = 'sola'
// console.log(heading.getAttribute('class', 'heading-text'))

// console.log(heading)



// var link = document.querySelector('a')

// link.setAttribute('data','link')


// console.log(link)


//innerText, textContent;

// var heading = document.querySelector('.heading');

// //geter
// console.log(heading.textContent) ;
// console.log(heading.innerText) ;
// //seter
// heading.innerText="new heading"


//innerHTML  outerHTML

var boxElement =  document.querySelector('.box')

boxElement.innerHTML = '<h1 class ="thuan">New Heading</h1>'
boxElement.outerHTML = '<span>Thuan</span>'

console.log(boxElement)

// function render(html){

// html =document.querySelector('ul')

// html.innerHTML='<li>Khóa học HTML</li><li>Khóa học JS</li><li>Khóa học PHP</li>'
 
//     return html
// }

// console.log(render())

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// // function render(courses) {
    
// // }

// function render(courses){
//     var html = courses.map(function(cb){
//         return `<li>${cb}</li>`
//     }).join('')

//     var ul= document.querySelector('ul')
//     ul.innerHTML = html

// }

// console.log(courses[1])


