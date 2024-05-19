'use client';

import React, { useState } from 'react';
import { Button, Modal, Box, Typography, TextField, IconButton } from '@mui/material';
import { storage } from '../../../../server/firebase'; // Import your Firebase storage instance
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const PostUpload = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleUpload = async () => {
    try {
      const fileUrls = await Promise.all(
        files.map(async (file) => {
          const fileRef = ref(storage, `posts/${file.name}`);
          await uploadBytes(fileRef, file);
          return await getDownloadURL(fileRef);
        })
      );

      // Upload post data with file URLs to your Firebase database or API
      console.log('Post data:', { title, description, fileUrls });

      // Reset form fields
      setTitle('');
      setDescription('');
      setFiles([]);
      handleClose();
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ backgroundColor: 'blue' }}
      >
        Create Post
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Create New Post
          </Typography>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            style={{ marginTop: '1rem' }}
          />
          <div style={{ marginTop: '1rem' }}>
            {files.map((file, index) => (
              <div key={index}>
                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </div>
            ))}
          </div>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="contained" color="primary" sx={{ ml: 2 }}>
              Upload
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PostUpload;
