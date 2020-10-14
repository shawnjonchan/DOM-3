// const api = jQuery('.test') //不返回元素们，返回 api 对象
// api.addClass('red')         //遍历所有刚才获取的元素，添加 .red
//    .addClass('blue')        // 并可链式操作     
//    .addClass('green')   

//  // obj.fn(p1)   函数里的 this 就是 obj
//  // obj.fn.call(obj.p1)

const api1 = jQuery('.test1')
api1.addClass('blue')

const api2 = api1.find('.child').addClass('red')

api1.addClass('green') //通过构造两个jQuery对象 jQuery api去操作

jQuery('.test')
  find('child') 
  .addClass('red') 
  .addClass('blue') 
  .addClass('green')
  .end()
  .addClass('yellow')

const x = jQuery('.test')

 x.parent().print()

const div1 = document.querySelector('.test')

const $div2 = $('.test')

div2 到底是 DOM 对象还是 jQuery 对象

DOM 对象只能使用 DOM API querySelector appendChild
jQuery 对象只能使用 jQuery 的 API find each
div2 到底是 DOM 对象还是 jQuery 对象