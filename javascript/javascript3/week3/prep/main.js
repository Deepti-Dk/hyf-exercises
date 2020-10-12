//javascript.info

class Comments {
  constructor(text, at, name) {
    this.text = text;
    this.at = at;
    this.name = name;
  }
}

const comment1 = new Comments('first', new Date(), 'hello user1');
const comment2 = new Comments('second', new Date(), 'hello user2');

class Post {
  constructor(content) {
    this.content = content;
    this.comments = [];
    this.numberOfLikes = 0;
  }
  addLikes() {
    this.numberOfLikes += 1;
  }
  addComments(comm) {
    this.comments.push(comm);
  }
  logComments() {
    console.log(this.comments);
  }
}

const firstPost = new Post('My first comment');
console.log(firstPost.numberOfLikes);
firstPost.addLikes();
console.log(firstPost.numberOfLikes);

firstPost.addComments(comment1);
firstPost.logComments();
firstPost.addComments(comment2);
firstPost.logComments();
