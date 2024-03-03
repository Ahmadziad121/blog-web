var express= require('express')
const cp=require('cookie-parser')
const cors = require('cors');
var app=express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cp())
const { ObjectId } = require('mongodb');

const secret='bu43ry8477r8gbn4f3e834iu';
const {MongoClient}=require('mongodb')
var connection="mongodb+srv://ahmadziad758:zAdhu6N1MB2EZWKe@cluster0.vwd87ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client= new MongoClient(connection );
// var bodyParse= require('body-parser')
async function connectMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}
connectMongo();
//var urlEncoded= bodyParse.urlencoded({extended:false})
const jwt=require('jsonwebtoken')

const mydb = client.db('users')
const collection = mydb.collection('users')
const blogsCollection = client.db().collection('blogs'); 

app.get('/',function (req, res) {
    res.send('start');})

app.post('/login',async (req, res) => {
    

        const { email, password } = req.body;
       const find= await collection.findOne({"Email": email, 'Password': password });
       if (find) {
        const token = jwt.sign({ name: find.Name, id: find._id, email, password }, secret);
        res.cookie('token', token, { httpOnly: true }).json('Done');
      } else {
        res.json('Error');
      }
    });
    app.post('/register',async(req,res)=>{

        try {
            const { username, email, password } = req.body;
            const exist = await collection.findOne({ 'Email': email });
    
            if (!exist) {
                await collection.insertOne({ 'Name': username, 'Email': email, 'Password': password });
                res.send('user created successfully');
            } else {
                res.send('User already exist');
            }
        } catch (error) {
            console.error('Error created user:', error);
            res.send('Internal Server Error');
        }
    });
    
    app.get('/profile', (req, res) => {
        const token = req.cookies.token;
        if (!token) {
          return res.json({ message: "Unauthorized" });
        }
      
        jwt.verify(token, secret, (err, decoded) => {
          if (err) {
            return res.json({ message: "Unauthorized" });
          }
      
          res.json(decoded);
        });
      });

    app.post('/logout', function (req, res) {
        res.clearCookie('token').json('Done');
      });
    

app.post('/blog',async(req,res)=>{

    try {
        
        const { id,title,content } = req.body;
            await blogsCollection.insertOne({'useID': id, 'Title': title, 'Content': content});
            res.send('Blog add successfully');
    } catch (error) {
        console.error('Error:', error);
        res.send('Internal Server Error');
    }
});
app.get('/allblogs',async(req,res)=>{
    const allBlogs= await blogCollection.find({}).toArray()
    res.send(allBlogs)
})

app.get('/content/:id', async(req,res)=>{
  const id = new ObjectId(req.params.id);
  ruselt=await blogsCollection.findOne({'_id':id})
  res.json(ruselt)
})


app.get('/userblogs/:id', async(req,res)=>{
  const id = req.params.id;
  ruselt=await blogsCollection.find({'userID':id}).toArray()
  res.json(ruselt)
})

app.get('/search', async (req, res) => {
    try {
        const { query } = req.query; 
        const blogsCollection = client.db("users").collection('blogs');
        const searchResults = await blogsCollection.find({'content':query}).toArray();
        const searchHistoryCollection = client.db("users").collection('searchhistory');
        await searchHistoryCollection.insertOne({ query, timestamp: new Date() });
        
        res.json(searchResults);
    } catch (error) {
        console.error('Error searching blogs:', error);
        res.json({ error: 'Internal server error' });
    }
});

var server= app.listen(9000,function()
{
     var host = server.address().address
     var port=server.address().port
     console.log("start my one")
})