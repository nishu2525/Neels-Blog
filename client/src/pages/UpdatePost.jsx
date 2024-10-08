import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
 import {getDownloadURL, getStorage, ref, uploadBytesResumable}from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate,useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdatePost() {
    const [file, setFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setImageUploadError] = useState(null);
    const [formData, setFormData] = useState({});
    const [publishError, setPublishError] = useState(null);
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate();
    console.log(formData);
    const { postId } = useParams();

    useEffect(() => {
      const fetchPost = async () => {
          try {
              const res = await fetch(`/api/post/getposts?postId=${postId}`);
              const data = await res.json();
              if (!res.ok) {
                  setPublishError(data.message);
                  return;
              }
              setFormData(data.posts[0]);
              console.log(postId);
          } catch (error) {
              console.log(error.message);
          }
      };
      fetchPost();
  }, [postId]);

    const handleUpdloadImage = async () => {
        try {
            if (!file) {
                setImageUploadError('Please upload an image')
                return;
            }
            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                    setImageUploadError('Image upload failed');
                    setImageUploadProgress(null);
                    console.log(error);
                  },
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                      setImageUploadProgress(null);
                      setImageUploadError(null);
                  setFormData({ ...formData, image: downloadURL });
                    });
                  }
            )

        } catch (error) {
            setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Current User:", currentUser);
        console.log("Form Data:", formData);
        try {
          const res = await fetch(`/api/post/updatepost/${postId}/${currentUser._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          console.log(formData._id);
          console.log(currentUser._id);
          console.log(res);
          const data = await res.json();
          if (!res.status==201) {
            setPublishError(data.message);
            return;
          }
    
          if (res.ok) {
             setPublishError(null);
             navigate(`/post/${data.slug}`);
          }
        } catch (error) {
         setPublishError('Something went wrong');
        }
      };
  return (
    <div className="p-3 mx-auto m-3 max-w-3xl h-auto">
         <h1 className='text-center text-3xl my-3font-semibold text-lightText'>Update a post</h1>
         <form className='flex flex-col gap-4 mb-12'onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 sm:flex-row justify-between' >
                <TextInput type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1' onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })} value={formData.title} />
            <Select value={formData.category} onChange={(e) =>
                   setFormData({ ...formData, category: e.target.value })}>
            <option value='uncategorized'>Select a category</option>
            <option value='blog'>Blog</option>
            <option value='publications'disabled>Publications</option>
            </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-1 border-teal border p-3'>
                <FileInput type='file' accept='image/*'onChange={(e)=>setFile(e.target.files[0])}/>
                <Button type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline onClick={handleUpdloadImage}  disabled={imageUploadProgress}>  {imageUploadProgress ? (
                <div className='w-16 h-16'>
                  <CircularProgressbar
                    value={imageUploadProgress}
                    text={`${imageUploadProgress || 0}%`}
                  />
                </div>
              ) : (
                'Upload Image'
              )}</Button>
            </div>
            {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}
            <ReactQuill theme="snow"  placeholder="Write Something To post..." className="text-whiteText h-52 mb-12" required 
            onChange={(value) => {
                setFormData({ ...formData, content: value });
          }} value={formData.content}/>
            <Button type='submit' gradientDuoTone='purpleToPink'>
            Update Post</Button>
            {publishError && (
          <Alert className='mt-2 mb-6' color='failure'>
            {publishError}
          </Alert>
        )}
            </form>
    </div>
  )
}
