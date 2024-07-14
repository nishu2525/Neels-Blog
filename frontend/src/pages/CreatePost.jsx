import { Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
// import {getStorage}from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreatePost() {
    const [file, setFile] = useState(null);
    const handleUpdloadImage = async () => {
        try {
            if (!file) {
               
                return;}
                // const storage = getStorage()
        } catch (error) {
            console.log();
        }
    }

  return (
    <div className="p-3 mx-auto m-3 max-w-3xl ">
         <h1 className='text-center text-3xl my-7 font-semibold text-lightText'>Create a post</h1>
         <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between' >
                <TextInput type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'/>
            <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='blog'>Blog</option>
            <option value='publications'>Publications</option>
            </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-1 border-teal border p-3'>
                <FileInput type='file' accept='image/*'onChange={(e)=>setFile(e.target.files[0])}/>
                <Button type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline onClick={handleUpdloadImage }> Upload image</Button>
            </div>
            <ReactQuill theme="snow"  placeholder="Write Something To post..." className="text-whiteText h-52 mb-12" required/>
            <Button type='submit' gradientDuoTone='purpleToPink'>
            Publish</Button>
            </form>
    </div>
  )
}
