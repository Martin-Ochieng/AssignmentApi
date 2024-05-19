require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const { getStolenBikes, getBikeStats } = require('./bikeindex');

const app = express();
const port = 3000;

app.get('/stolen-bikes', async (req, res) => {
    const location = req.query.location || 'IP';
    const distance = req.query.distance || 10;
    const page = req.query.page || 1;
    const perPage = req.query.per_page || 25;

    try {
        const data = await getStolenBikes(location, distance, page, perPage);
        logger.info('Bike data response Successful:', data);
        res.json(data);
    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('/bike-stats', async (req, res) => {
    const location = req.query.location || 'IP';
    const distance = req.query.distance || 10;
    const page = req.query.page || 1;
    const perPage = req.query.per_page || 100;

    try {
        const stats = await getBikeStats(location, distance, page, perPage);

        // Log the response before sending it
        logger.info('Bike stats response Successful:', stats);
        res.json(stats);
    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ error: error.message });
    }
});







app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}/stolen-bikes?location=YOUR_LOCATION&distance=10&page=1&per_page=25`);
    logger.info(`Server running at http://localhost:${port}/bike-stats?location=YOUR_LOCATION&distance=10&page=1&per_page=100`);
});
