const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static HTML
app.use(express.static('public'));

// Endpoint to open your shortcut
app.get('/open-bd', (req, res) => {
    const shortcutPath = path.join(__dirname, 'BD.lnk'); // replace with your .lnk path
    exec(`start "" "${shortcutPath}"`, (err) => {
        if (err) {
            console.error(err);
            return res.send('Failed to open BD shortcut.');
        }
        res.send('BD shortcut opened!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
