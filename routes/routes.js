const router = require("express").Router()
const sql = require("../model/db");


router.post('/', async(req, res) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const videoId = getRandomInt(1, 1000);

    const { title, description, duration } = req.body;
    
    const post = await sql `INSERT INTO videos3 (description, duration, id, title) VALUES (${description}, ${duration}, ${videoId}, ${title})`



    res.status(200).json({item: post})
})


router.get('/', async (req, res) => {
   console.time();
   const users = await sql `SELECT * FROM videos3`;

   console.timeEnd();
   console.log(users)

   res.status(200).json({ msg: users })
});


router.get('/select', async(req, res) => {
    const resultado = await sql` SELECT id, title, duration FROM videos3 
    WHERE duration > '200'
    ORDER BY duration DESC `

    console.log(resultado)

    res.status(200).send()
})


router.get('/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    
    const result = await sql` SELECT * FROM videos3 WHERE id = ${id}`

    console.log(result)
    
    res.status(200).send()
})


router.get('/teste/:id', async(req, res) => {
    console.log(req.params)
    const id = req.params.id;
    
    try {
        const user = await sql`SELECT * FROM videos3 
        WHERE id = ${id};`


        res.status(200).json({ msg: user })
    } catch (erro) {
        res.status(400).json({ msg: erro.stack })
    }
})


router.patch('/:id', async(req, res) => {
    const id = parseInt(req.params.id);

    const { description, duration, title } = req.body;

    if(description) {
        await sql `UPDATE videos3 SET description = ${description}
        WHERE id = ${id}`
    } if (duration) {
        await sql `UPDATE videos3 SET duration = ${duration}
        WHERE id = ${id}`
    } if (title) {
        await sql `UPDATE videos3 SET title = ${title}
        WHERE id = ${id}`
    }
   
    res.status(200).send()
});


router.delete('/:id', async(req, res) => {
    const id = parseInt(req.params.id);

    await sql`DELETE FROM videos3 WHERE id = ${id}`

    res.status(201).send()
}) 



module.exports = router;



// curl -X POST -H "Content-Type: application/json" -d '{"description": "video03", "duration": "510", "title": "video3"}' http://localhost:9000/