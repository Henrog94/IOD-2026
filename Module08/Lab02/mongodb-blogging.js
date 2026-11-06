// Module 08 — Exercise 2: MongoDB blogging application
// Run in MongoDB Compass > MongoSH. Safe to run more than once.
var blogDB = db.getSiblingDB('bloggingDB');

blogDB.users.createIndex({ username: 1 }, { unique: true });
blogDB.users.createIndex({ email: 1 }, { unique: true });
blogDB.posts.createIndex({ userId: 1 });
blogDB.likes.createIndex({ userId: 1, postId: 1 }, { unique: true });
blogDB.comments.createIndex({ postId: 1 });

blogDB.users.updateOne({ username: 'alex' }, { $setOnInsert: { username: 'alex', email: 'alex@example.com', joinedAt: new Date() } }, { upsert: true });
blogDB.users.updateOne({ username: 'jordan' }, { $setOnInsert: { username: 'jordan', email: 'jordan@example.com', joinedAt: new Date() } }, { upsert: true });
var alex = blogDB.users.findOne({ username: 'alex' });
var jordan = blogDB.users.findOne({ username: 'jordan' });

blogDB.posts.updateOne({ userId: alex._id, title: 'My First Blog' }, { $setOnInsert: { userId: alex._id, title: 'My First Blog', description: 'Welcome to my first blog post!', image: 'first-blog.jpg', createdAt: new Date() } }, { upsert: true });
blogDB.posts.updateOne({ userId: alex._id, title: 'Learning MongoDB' }, { $setOnInsert: { userId: alex._id, title: 'Learning MongoDB', description: 'Today I learned about document databases.', image: 'mongodb.jpg', createdAt: new Date() } }, { upsert: true });
var firstPost = blogDB.posts.findOne({ userId: alex._id, title: 'My First Blog' });

blogDB.likes.updateOne({ userId: jordan._id, postId: firstPost._id }, { $setOnInsert: { userId: jordan._id, postId: firstPost._id } }, { upsert: true });
blogDB.comments.updateOne({ userId: jordan._id, postId: firstPost._id, text: 'Great first post!' }, { $setOnInsert: { userId: jordan._id, postId: firstPost._id, text: 'Great first post!', createdAt: new Date() } }, { upsert: true });

print('CREATE and READ — collections and sample documents:');
for (var name of ['users','posts','likes','comments']) { print(name + ': ' + blogDB[name].countDocuments({})); printjson(blogDB[name].find().toArray()); }

// UPDATE example: change a post description
print('UPDATE:');
printjson(blogDB.posts.updateOne({ _id: firstPost._id }, { $set: { description: 'My updated first blog post!' } }));

// DELETE example: create a temporary comment and remove it
blogDB.comments.updateOne({ userId: alex._id, postId: firstPost._id, text: 'Temporary test comment' }, { $setOnInsert: { userId: alex._id, postId: firstPost._id, text: 'Temporary test comment', createdAt: new Date() } }, { upsert: true });
print('DELETE:');
printjson(blogDB.comments.deleteOne({ userId: alex._id, postId: firstPost._id, text: 'Temporary test comment' }));

print('Final counts:');
for (var name of ['users','posts','likes','comments']) print(name + ': ' + blogDB[name].countDocuments({}));
