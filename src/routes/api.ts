import express from "express"
import CacheService from "../services/CacheService";
import generateID from "../utils/generateID";
import getRandomStudents from "../utils/getRandomStudents";


const router = express.Router();
const cache = new CacheService(); // temp as db xd

if(process.env.NODE_ENV !== "production"){
    const randomStudents = getRandomStudents(10);

    randomStudents.forEach(student => {
        if(cache.has(student.id)) return;
        cache.set(student.id, student);
    });
}

router.get("/", (req, res, next) => {
    res.json({api: "git gud 200"})
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    const id = generateID(); // replace with id from db


    if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
        const status = 400;
        const message = "Invalid request body parameters. Format error.";

        res.status(status);
        res.json({ status, message });
    }
    else{
        cache.set(id, req.body);
        const status = 201;

        res.status(status);
        res.json({ status, id });
    }
});

router.get("/student/:id", (req, res, next) => {
    const key = req.params.id;

    const student = {
        id: key,
        ...cache.get(key)
    };

    res.status(200);
    res.json(student);
});

router.get("/students/all", (req, res, next) => {
    const all = [...cache.keys()].map(key => ({
        id: key,
        ...cache.get(key)
    }));

    res.status(200);
    res.json({ students: all });
});

// random all/ random with :amount
// router.get("/students/all", (req, res, next) => {  });

export default router;