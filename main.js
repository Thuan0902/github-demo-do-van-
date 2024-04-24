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

// var boxElement =  document.querySelector('.box')

// boxElement.innerHTML = '<h1 class ="thuan">New Heading</h1>'
// boxElement.outerHTML = '<span>Thuan</span>'

// console.log(boxElement)

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

// console.log(render(courses))

// var box =document.querySelector('.box')

// box.innerHTML='<h1 title="Heading">heading</h1>'

// console.log(document.querySelector('h1').innerText = 'aloo')


// var box =document.querySelector('.box')
// box.innerHTML='<h1 class="headingNode">Heading</h1>'
// box.setAttribute('id','thuan')
// box.removeAttribute('id','thuan')
// console.log(heading.textContent)

// box.style.width = "100px"
// box.style.height = "100px"

// box.style.backgroundColor="red";

// Object.assign(box.style,{
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green'


// })
// console.log(box.style)


// var red = document.querySelector('.red')
// red.style.backgroundColor = '#f00';
// document.querySelector('p').style.color = "#ff0000";


// box.classList.add('thuan')
// box.classList.remove('thuan')


// box.classList.toggle('thuan')
// console.log(box.classList.contains('thuan'))


var elementBox = document.querySelector('h2');
var elementBox3 = document.querySelector('h3');
// elementBox.foreach((div)=> console.log(elementBox))

// for(var index =0;index<elementBox.length)
// console.log(elementBox)

// elementBox.forEach(function(div){
//     div.classList.add('box')
    
// })


// DOM events
// 1. Attribute events
// 2. Assign event using the element node
// elementBox.onclick = function(e){
//     return elementBox.innerHTML = 'aloo'
// }

// function chay(){
//     return elementBox3.innerHTML = "chay ngay di"
// }


// 3 .Input / select
// 4. Key up/ down

// var inputElement = document.querySelector('input[type ="checkbox"]')
// var text = document.querySelector('.text')
// inputElement.onchange = function(e){
//     console.log(e.target.checked)
// }


// var inputElement = document.querySelector('select')
// var text = document.querySelector('.text')
// inputElement.onchange = function(e){
//     console.log(e.target.value)
// }

// var inputElement = document.querySelector('input[type ="text"]')
// var text = document.querySelector('.text')
// inputElement.onkeydown = function(e){
//     console.log(e.target.value)
// }





// var inputElement = document.querySelector('input[type ="text"]')
// var text = document.querySelector('.text')
// inputElement.onkeyup = function(e){
//     console.log(e.which)

//     switch(e.which){
//         case 65:
//             console.log('exit');
//             break;
//     }
// }


// document.onkeydown = function(e){
//     switch(e.which){
//         case 65:
//             console.log('exit');
//             break;
//     }
// }


// 5. PreventDefault
// 6. stopPropagation
// var aElement =document.links;

// for(var i =o;i< aElement.length;++i){
//     aElement[i].onclick = function(e){
        
//         if(!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }

//     }
// }

// console.log(aElement)

// cũng có thể sử dụng link hoặc anchors (nhưng anchors sẽ chỉ tìm kiếm những thẻ a có element 'name')
// var aElement = document.querySelectorAll('a');

// for(var i=0;i<aElement.length;i++){
//     aElement[i].onclick =function(e){
//         if(!e.target.href.startWith("https://f8.edu.vn")){
//             e.preventDefault();
//         }
//     }
// }


// var ulElement =document.querySelector('ul');

// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }

// ulElement.onclick = function(e){
//     console.log(e.target)
// }


// EVENT LISTENER 

// var btnElement = document.querySelector('button')

// btnElement.onclick = function(){
//     console.log('viec 1')
// }


//JSON
// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number,String, Boolean, Null, Array,
// Object
// Mã hóa / Giải mã
// Encode / decode 
// Stringify / Parse

// // var json = '["js","php"]';
// var json = '{"name":"thuan","age": 18}';

// var a ='1';

// console.log(JSON.parse(a));

// 1. Event listener --> OK
// 2. JSON --> OK
// 3. Promise (Khó)
//      - Sync
//      - Async
//      - Pain
//      - Lý thuyết
//      - thực hành

// setTimeout, setInterval, fetch,
// XMLHttpRequest, file reading,
// request animation frame
// => là những thao tác bất đồng bộ (Async)

// Callback hell
// setTimeout(function() {
//     console.log(1); // viec 1
//     setTimeout(function() {
//         console.log(2); // viec 2
//         setTimeout(function() {
//             console.log(3); // viec 3
//             setTimeout(function() {
//                 console.log(4); // viec 4
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// b1 : khỏi tạo Promise
// b2 : Executor

// promise có 3 trạng thái 
// 1. pendding : không trả kết quả , tràn bộ nhớ
// 2. fulfilled : thành công
// 3. reiected : đã thất bại
// var promise = new Promise(
//     // Executor
//     function(resolve, reject){
        // Logic
        // thành công : resolve()
        // thất bại : reject()

        // Fake call API
        // resolve([
        //     {
        //         id: 1,
        //         name: 'js'
        //     }
        // ]);

//         reject('co loi')
//     }
// )
// promise
//     .then(function(courses){
//         console.log(courses)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
//     .finally(function(){
//         console.log('Done')
//     })
// trả lời khi phỏng vấn : em có nắm về khái niện Promise
// 1. Promise là một khái niệm sinh ra để xử lý những thao tác bất đồng bộ 
//  trước khi có Promise thì chúng ta hay phải sử dụng Callback và 
//  Callback sẽ xuất hiện hiện tượng Callback Hell(callback trong callback)
//  làm cho code dễ hiểu hơn

// 1. Promise.resolve
// 2. Promise.reject

// //  Thư viện; output luôn luôn là một PROMISE 
// var promise = Promise. reject('Error!');
// promise
// then(function (result) {
// 23333 .catch(function(err) {
// console.log('result: ', result);
// })
// console.log('err: ', err);
// });

// 3. Promise.all dùng để chạy ss cho 2 bất đồng bộ ko phụ thuộc và nhau

var promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1])
        },2000)
    }
)
var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3])
        },5000)
    }
);

Promise.all([promise1,promise2]).then(function(result){
    var result1 = result[0];
    var result2 = result[1];

    console.log(result1.concat(result2))
})

var user =[
    {
        id: 1,
        name: "Van Thuan" ,
    },
    {
        id: 2,
        name: "son dang"
    },
    {
        id: 3,
        name: "Tra..."
    },
    // ...
]

var comment =[
    {
        id: 1,
        content: "alooo",
        userId: 1
    },
    {
        id: 2,
        content: 'hiiii',
        userId: 2,
    }
    // ...
]
// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

// fake API

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            return resolve(comment);
        },1000)
    })
}
getComments()
    .then(function(contents){
        var userIds = comment.map(function(content){
            return content.userId;
        })
        return getUserByIds(userIds)
            .then(function(usersr){
                return {
                    user: usersr,
                    comment: comment,
                }
            });
}).then(function(data){
    var commentBock = document.getElementById('comment')
    var html = '';
    data.comment.forEach(function(comment){
        var user = data.user.filter(function(user){
            return user.id === comment.id
        })
        html += `${user.name}:${comment.content}`
    })
    commentBock.innerHTML= html
})
function getUserByIds(userIds){
    return new Promise(function(resolve){
            result = user.filter(function(users){
                    return userIds.includes(users.id);
            })
            setTimeout(function(){
            resolve(result)
        },1000)
    })
}



// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Performance












