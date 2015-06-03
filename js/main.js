console.log('This is cool!');

// $('.container').html(template.example({
//   value: 'Hello, World!!'
// }));

$.getJSON( "http://private-44f6d-timeline6.apiary-mock.com/timeline").done( function (blogData) {

    console.log(blogData);

    blogData.timelines = blogData.timelines.forEach(function(posts) {

      var title = posts.title;
      
      var timestamp = posts.timestamp;

      var content = posts.content;
      
      var icon = posts.icon;
      
      var data = timestamp + "\n" + title + "\n" + content + "\n" + icon;
      
      console.log(data);
    
    });

});