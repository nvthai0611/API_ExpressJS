const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/api/check-grammar', async (req, res) => {
    const { text } = req.body;
    try {
        const response = await axios.post('https://api.languagetool.org/v2/check', {
            text,
            language: 'en-US',
        });
        const matches = response.data.matches;
        const segments = [];
        let lastPos = 0;

        matches.forEach(match => {
            if (match.offset > lastPos) {
                segments.push({ text: text.substring(lastPos, match.offset), error: false });
            }
            segments.push({ text: text.substring(match.offset, match.offset + match.length), error: true, message: match.message });
            lastPos = match.offset + match.length;
        });

        if (lastPos < text.length) {
            segments.push({ text: text.substring(lastPos), error: false });
        }

        res.json({ matches, segments });
    } catch (error) {
        res.status(500).json({ error: 'Error checking grammar' });
    }
});

app.get('/api/posts', (req, res) => {
    const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        // Add more posts here
    ];
    res.json(posts);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
