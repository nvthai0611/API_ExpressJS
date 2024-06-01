import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import axios from 'axios';
import debounce from 'lodash.debounce';

const GrammarChecker = () => {
    const [text, setText] = useState('');
    const [segments, setSegments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
        debouncedCheckGrammar(event.target.value);
    };

    const checkGrammar = async (text) => {
        if (!text) {
            setSegments([]);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('/api/check-grammar', { text });
            const { matches, segments } = response.data;
            setSegments(segments);
        } catch (error) {
            console.error('Error checking grammar:', error);
        } finally {
            setLoading(false);
        }
    };

    const debouncedCheckGrammar = useCallback(debounce(checkGrammar, 500), []);

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Grammar Checker</Typography>
            <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your text here"
            />
            <Button variant="contained" color="primary" onClick={() => checkGrammar(text)} style={{ marginTop: '10px' }}>
                {loading ? 'Checking...' : 'Check Grammar'}
            </Button>
            <Paper style={{ marginTop: '20px', padding: '10px' }}>
                {segments.length > 0 ? (
                    segments.map((segment, index) => (
                        <span key={index} style={{ color: segment.error ? 'red' : 'black' }}>
                            {segment.text}
                        </span>
                    ))
                ) : (
                    <Typography variant="body1">No errors found.</Typography>
                )}
            </Paper>
            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Posts</Typography>
            <List>
                {posts.map((post) => (
                    <ListItem key={post.id}>
                        <ListItemText primary={post.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default GrammarChecker;
