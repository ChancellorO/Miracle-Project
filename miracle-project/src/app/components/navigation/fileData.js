'use client';
import { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../server/firebase";
import MUIModal from "./MUIModal";

const FileData = () => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      const storageRef = ref(storage, "posts/");
      const result = await listAll(storageRef);
      const filePromises = result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { name: itemRef.name, url };
      });
      const files = await Promise.all(filePromises);
      setFiles(files);
    };

    fetchFiles();
  }, []);

  const handlePreview = (file) => {
    setPreview(file);
  };

  const handleClosePreview = () => {
    setPreview(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Files</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {files.map((file) => (
          <div key={file.name} className="cursor-pointer" onClick={() => handlePreview(file)}>
            <img src={file.url} alt={file.name} className="w-full h-40 object-scale-down" />
            <p className="text-center mt-2">{file.name}</p>
          </div>
        ))}
      </div>

      <MUIModal show={!!preview} onClose={handleClosePreview}>
        {preview && (
          <>
            {preview.url.endsWith(".pdf") ? (
              <iframe src={preview.url} width="100%" height="100%"></iframe>
            ) : preview.url.endsWith(".mp4") ? (
              <video controls src={preview.url} width="20%" height="100%"></video>
            ) : (
              <img src={preview.url} alt={preview.name} width="20%" />
            )}
          </>
        )}
      </MUIModal>
    </div>
  );
};

export default FileData;
