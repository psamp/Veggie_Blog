console.log('This is cool!');

// JD'S MOVIES JS

// $.getJSON('movies.json').done(function(data){

//   console.log('data', data);
  
//   data.movies = data.movies.map(function(movie){

//     if(movie.release) {

//       var date = moment(new Date(movie.release));

//       movie.release = date.format('MMMM Do, \'YY');
//     }
  
//   return movie;

//   });

//   $('.container').html(template.movies(data));

// });

$.getJSON( "http://private-44f6d-timeline6.apiary-mock.com/timeline").done(function (blogData) {

  blogData = blogData.timelines.map(function(post) {

    var title = post.title;

    // post date + timeline

    var date = moment(post.timestamp);
      
    var time = moment(post.timestamp);

    post.timestamp = date.format('M/D/YY');

    var poststamp = time.format('HH:mm');
      
    var timestamp = post.timestamp;

    // end postdate + timestamp

    var content = post.content;
      
    var icon = post.icon;
      
    var consoleLogData = timestamp + "\n" + poststamp + "\n" + title + "\n" + content + "\n" + icon;

    console.log(consoleLogData);

    return post;

    });

  console.log(blogData);

  $('.blogposts').html(template.blogpost(blogData));

});