console.log('This is cool!');

$.getJSON( "http://private-44f6d-timeline6.apiary-mock.com/timeline").done(function (blogData) {

  console.log(blogData);

  blogData.timelines.forEach(function(post) {

    var title = post.title;

    var date = moment(post.timestamp);
      
    var time = moment(post.timestamp);

    post.timestamp = date.format('M/D/YY');

    post.poststamp = time.format('HH:mm');

    var poststamp = post.poststamp;
      
    var timestamp = post.timestamp;

    var content = post.content;
      
    var icon = post.icon;
      
    var consoleLogData = timestamp + "\n" + poststamp + "\n" + title + "\n" + content + "\n" + icon;

    // console.log(consoleLogData);

    return post;
    });

  $('.blogposts').html(template.blogpost(blogData));
});