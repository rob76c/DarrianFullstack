import { Router } from "express";

//Products endpoints
const router= Router();

router.get('/', (req, res)=> {
    res.send('the list of products 123');
});

router.get('/:id', (req, res)=> {
    console.log(req.params);
    res.send('A product');
});

router.post('/', (req, res)=> {
    res.send('New product created');
});

export default router;