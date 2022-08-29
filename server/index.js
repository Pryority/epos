const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json(
        {
            "products": [
                {
                    "title": "Meatlovers",
                    "ingredients": ["Pepperoni", "Mozzorella", "Marinara", "Bacon"],
                    "price": 24.95
                },
                {
                    "title": "Pesto Pasta",
                    "ingredients": ["Linguine", "Parmasean", "Pesto",],
                    "price": 18.95
                },
            ]
        }
    )
})

app.listen(3001, () => {
    console.log(`Server started on Port 3001`)
})